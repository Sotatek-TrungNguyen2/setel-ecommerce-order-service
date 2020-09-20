import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('order')
export class OrderController {
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

  @Post('/:id')
  createOrder() {
    return true;
  }

  @Delete('/:id')
  deleteOrder() {
    return true;
  }
}
