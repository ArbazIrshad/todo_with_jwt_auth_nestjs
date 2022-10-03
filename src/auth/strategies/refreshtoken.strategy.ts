import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class RTStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreException: false,
      secretOrKey: 'secretkey', 
    })
  }

  validate(payload: any) {
    console.log(payload);
    return { userId: payload.sub, username: payload.username};
  }
}
