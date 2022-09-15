import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import {ForbiddenException, Injectable} from '@nestjs/common'
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super()
    
  }

  async validate(username:string, password: string){
    const user  = this.authService.signUpLocal({email: username, password: password})

    if(!user) {
      throw new ForbiddenException('Credentials Incorrect')
    }
    return user;
  }
}
