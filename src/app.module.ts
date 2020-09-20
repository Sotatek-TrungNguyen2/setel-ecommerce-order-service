import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppConfigModule, AppConfigService } from '@/app-config';
import { OrderModule } from '@/orders';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [AppConfigModule],
      useFactory: (config: AppConfigService) => config.getMongoOption(),
      inject: [AppConfigService],
    }),
    OrderModule,
  ],
})
export class AppModule {}
