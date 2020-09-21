import { IItem } from '@/orders/types/order.interface';
import {
  IsOptional,
  IsString,
  IsNotEmpty,
  IsInt,
  IsPositive,
  Min,
} from 'class-validator';

export class ItemDTO {
  @IsOptional()
  @IsString()
  id?: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  unitCost: number;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  count: number;

  static convertToIItem(itemDTO: ItemDTO): IItem {
    const { id, name, unitCost, count } = itemDTO;
    return {
      data: { id, name, unitCost },
      count,
    };
  }
}
