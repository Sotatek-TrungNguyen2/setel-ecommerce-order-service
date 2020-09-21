import { Injectable } from '@nestjs/common';
import { OrderRepository } from '@/orders/db/order.repository';
import { ItemDTO } from '@/orders/dto/item.dto';
import { OrdererDTO } from '@/orders/dto/orderer.dto';
import { Currency } from '@/orders/types/order.constant';
import { v4 as uuid } from 'uuid';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepo: OrderRepository) {}
  async createNewOrder(firstItem: ItemDTO) {
    return this.orderRepo.create({
      cart: [ItemDTO.convertToIItem(firstItem)],
      currency: Currency.VND,
      trackingUID: uuid(),
    });
  }
}
