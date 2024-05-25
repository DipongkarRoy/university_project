import { Schema, model } from 'mongoose';
import { Tuser } from './user.interface';

const userSchema = new Schema<Tuser>(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['admin', 'student', 'faculty'],
    },
    status: {
      type: String,
      enum: ['in-progress', 'block'],
      default:'in-progress'
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const UserModel = model<Tuser>('User', userSchema);
