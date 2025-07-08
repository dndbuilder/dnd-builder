import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as bcrypt from "bcrypt";
import { Document } from "mongoose";

export enum UserRole {
  CUSTOMER = "customer",
  ADMIN = "admin",
}

export type UserDocument = User & Document;

@Schema({
  timestamps: true,
  collection: "users",
  toJSON: {
    versionKey: false,
    getters: true,
  },
})
export class User {
  @Prop({
    type: String,
    get: function (this: UserDocument) {
      return this._id?.toString();
    },
  })
  id: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: String, required: true })
  firstName: string;

  @Prop({ type: String, required: true })
  lastName: string;

  @Prop({
    type: String,
    enum: UserRole,
    default: UserRole.CUSTOMER,
  })
  role: UserRole;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre("save", async function (next) {
  const user = this as UserDocument;

  // Only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);

    // Hash the password using our new salt
    user.password = await bcrypt.hash(user.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});
