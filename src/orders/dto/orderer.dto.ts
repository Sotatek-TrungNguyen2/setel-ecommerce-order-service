import { IOrderer } from '@/orders/types/order.interface';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class OrdererDTO {
  @IsOptional()
  @IsString()
  id?: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  static convertToOrderer(ordererDTO: OrdererDTO): IOrderer {
    const { id, name, email } = ordererDTO;
    return { id, name, email };
  }
}
