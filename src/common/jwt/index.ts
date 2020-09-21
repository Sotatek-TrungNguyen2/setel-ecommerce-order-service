import { Module } from '@nestjs/common';
import { JWTService } from '@/common/jwt/jwt.service';

@Module({
  providers: [JWTService],
  exports: [JWTService],
})
export class JWTModule {}

export { JWTService };
