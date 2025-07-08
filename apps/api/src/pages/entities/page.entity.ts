import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";
import { User } from "../../users/entities/user.entity";

export type PageDocument = Page & Document;

@Schema({
  timestamps: true,
  collection: "pages",
  toJSON: {
    versionKey: false,
    getters: true,
  },
})
export class Page {
  @Prop({
    type: String,
    get: function (this: PageDocument) {
      return this._id?.toString();
    },
  })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  description?: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: "User", required: true })
  userId: User;

  @Prop({ type: Object, required: true })
  content: Record<string, any>;
}

export const PageSchema = SchemaFactory.createForClass(Page);

// Create a compound index for name and userId to ensure uniqueness of page names per user
PageSchema.index({ name: 1, userId: 1 }, { unique: true });
