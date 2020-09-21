import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { IJWTOptions, IJWTPayload } from '@/common/jwt/jwt.types';

@Injectable()
export class JWTService {
  public static JWT_PRIVATE_KEY = '!#$%^&*(';
  createJWT(payload: any, options: IJWTOptions): IJWTPayload {
    return {};
  }
  verifyJWT(token: string, options: IJWTOptions) {
    return true;
  }
  decodeJWT(token: string, options: IJWTOptions) {
    return true;
  }
}
