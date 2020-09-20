import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { AppConfigModule, AppConfigService } from '@/app-config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [AppConfigModule],
      useFactory: (config: AppConfigService) => config.getMongoOption(),
      inject: [AppConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
