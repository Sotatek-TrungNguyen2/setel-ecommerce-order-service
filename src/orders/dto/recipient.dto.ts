import { IRecipient } from '@/orders/types/order.interface';
import { IsString, IsOptional, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class RecipientDTO {
  @IsOptional()
  @IsString()
  id?: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsPhoneNumber('VN')
  phone: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  static convertToRecipient(recipientDTO: RecipientDTO): IRecipient {
    const { id, name, phone, address } = recipientDTO;
    return { id, name, phone, address };
  }
}
