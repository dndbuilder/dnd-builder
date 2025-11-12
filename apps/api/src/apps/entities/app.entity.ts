import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";
import * as crypto from "crypto";
import { User } from "../../users/entities/user.entity";

export type AppDocument = App & Document;

@Schema({
  timestamps: true,
  collection: "apps",
  toJSON: {
    versionKey: false,
    getters: true,
  },
})
export class App {
  @Prop({
    type: String,
    get: function (this: AppDocument) {
      return this._id?.toString();
    },
  })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  appId: string;

  @Prop({ required: true })
  appKey: string; // This will be hashed before saving

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: "User", required: true })
  userId: User;
}

export const AppSchema = SchemaFactory.createForClass(App);

// Function to generate a unique appId (UUID)
export const generateAppId = (): string => {
  return crypto.randomUUID();
};

// Function to generate a secure appKey
export const generateAppKey = (): string => {
  return crypto.randomBytes(32).toString("hex");
};

// Ensure appId/appKey exist and are hashed before validation
AppSchema.pre<AppDocument>("validate", async function () {
  if (!this.appId) {
    this.appId = generateAppId();
  }

  if (this.isNew && !this.appKey) {
    this.appKey = generateAppKey();
  }
});

// Create index for userId to speed up queries
AppSchema.index({ userId: 1 });
