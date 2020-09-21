import * as mongoose from 'mongoose';
import { Currency } from '@/orders/types/order.constant';

export const OrderSchema = new mongoose.Schema(
  {
    orderer: {
      id: String,
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    },
    recipient: {
      id: String,
      name: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
    },
    cart: [
      {
        data: {
          id: String,
          name: String,
          unitCost: Number,
        },
        count: Number,
      },
    ],
    currency: {
      type: String,
      enum: Object.values(Currency),
      default: Currency.VND,
    },
    totalAmount: Number,
    trackingUID: String,
    state: {
      type: String,
      enum: ['created', 'staled', 'cancelled', 'confirmed', 'delivered'],
    },
  },
  {
    timestamps: { updatedAt: 'updatedAt' },
  },
);
