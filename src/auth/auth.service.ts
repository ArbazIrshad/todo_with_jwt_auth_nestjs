import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthDTO } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signUpLocal(dto: AuthDTO) {
    const { email, password } = dto;
    const user = await this.userService.create({ email, password });
    const tokens = this.getTokens(user.username, user.email);
    return tokens;
  }

  async signInLocal(dto: AuthDTO) {
    const user = await this.userService.findOne({ email: dto.email });

    if (!user) throw new ForbiddenException('Access Denied');

    if (user.password != dto.password)
      return new ForbiddenException('Access Denied');

    return user;
  }

  async getTokens(userId: string, email: string) {
    const jwtPayload = {
      sub: userId,
      email: email,
    };

    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: 'secretkey',
        expiresIn: '15m',
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: 'secretkey',
        expiresIn: '15m',
      }),
    ]);

    return { access_token: at, refresh_token: rt };
  }
}
