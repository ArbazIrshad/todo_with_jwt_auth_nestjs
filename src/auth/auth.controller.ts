import { Body, Controller, Post,Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto/auth.dto';
import { LocalAuthGuard } from './guards/local.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService){}

  @UseGuards(LocalAuthGuard)
  @Post('signup')
  signUp(@Request() req) {
    return {msg: 'User Succussfully Registered', user: req.user}
  }

  @Post('signin')
  async signInLocal(@Body() dto: AuthDTO) {
    const user = await this.authService.signInLocal(dto);
    return {msg: 'User Successfuly LoggedIn', user}
  }
}

