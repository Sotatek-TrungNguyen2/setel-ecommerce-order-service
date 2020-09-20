import { Module } from '@nestjs/common';
import { OrderDBModule } from '@/orders/db';
import { OrderRepository } from '@/orders/db/order.repository';
import { OrderController } from '@/orders/controllers/order.controller';

@Module({
  imports: [OrderDBModule],
  providers: [OrderRepository],
  controllers: [OrderController],
})
export class OrderModule {}
