import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { OrderService } from '@/orders/services/order.service';
import { ItemDTO } from '@/orders/dto/item.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  readOrdersByFilter() {
    return true;
  }

  @Get('/:id')
  readOrder() {
    return true;
  }

  @Put('/:id')
  updateOrder() {
    return true;
  }

  @Post('/new')
  async createOrder(@Body('item') firstItem: ItemDTO) {
    return this.orderService.createNewOrder(firstItem);
  }

  @Delete('/:id')
  deleteOrder() {
    return true;
  }
}
