import { Document } from 'mongoose';

export interface IOrder extends Document {
  name: string;
  orderer: IOrderer;
  recipient: IRecipient;
  cart: IItem[];
  totalCost: number;
  trackingUID: string;
  updatedAt: string;
}

export interface IOrderer {
  id: string;
  name: string;
  email: string;
}

export interface IRecipient {
  id: string;
  name: string;
  phone: string;
  address: string;
}

export interface IItem {
  data: {
    id: string;
    name: string;
    unitCost: number;
  };
  count: number;
}
