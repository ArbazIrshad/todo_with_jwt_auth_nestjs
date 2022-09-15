import { Controller, Post,Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local.guard';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('signup')
  signUp(@Request() req) {
    return {msg: 'User Succussfully Registered', user: req.user}
  }
}

