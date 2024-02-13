import bycript from 'bcrypt';
import { Schema, model } from 'mongoose';
import config from '../../config';
import { TUser } from './user.interface';
const userSchema = new Schema<TUser>(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    id: {
      type: String,
      required: [true, 'ID is required'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      select: 0,
    },
    role: {
      type: String,
      enum: ['patient', 'doctor', 'admin'],
      required: [true, 'Role is required'],
    },
    status: {
      type: String,
      enum: ['in-progress', 'block'],
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

// monggose pre middleware/hook
// hashed password before saving on db
userSchema.pre('save', async function async(next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;

  user.password = await bycript.hash(
    user.password,
    Number(config.bcrypt_salt_round),
  );
  next();
});

const User = model<TUser>('User', userSchema);

export default User;
