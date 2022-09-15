import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthDTO } from './dto/auth.dto';

@Injectable()
export class AuthService {
constructor(private userService: UserService) {}

  async signUpLocal(dto: AuthDTO){
    const {email, password} = dto;
    const user = await this.userService.create({email, password}) 
    return user;
  }
}
