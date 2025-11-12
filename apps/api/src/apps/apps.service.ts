import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { App, AppDocument } from "./entities/app.entity";
import { CreateAppDto } from "./dto/create-app.dto";
import { ValidateAppDto } from "./dto/validate-app.dto";
import { User } from "../users/entities/user.entity";

@Injectable()
export class AppsService {
  constructor(
    @InjectModel(App.name)
    private appModel: Model<AppDocument>
  ) {}

  async create(createAppDto: CreateAppDto, user: User): Promise<App & { appKey: string }> {
    try {
      const createdApp = await this.appModel.create({
        ...createAppDto,
        userId: user.id,
      });

      return createdApp.toJSON() as App & { appKey: string };
    } catch (error) {
      // Handle MongoDB duplicate key error
      if (error.name === "MongoServerError" && error.code === 11000) {
        throw new ConflictException("An app with this name already exists");
      }
      throw error;
    }
  }

  async findAll(userId: string): Promise<App[]> {
    return this.appModel.find({ userId }).exec();
  }

  async findOne(id: string, userId: string): Promise<App> {
    const app = await this.appModel.findOne({ _id: id, userId }).exec();

    if (!app) {
      throw new NotFoundException("App not found");
    }

    return app;
  }

  async validate(validateAppDto: ValidateAppDto): Promise<{ valid: boolean; app?: App }> {
    const app = await this.appModel.findOne({ appId: validateAppDto.appId }).exec();

    if (!app) {
      return { valid: false };
    }

    if (app.appKey !== validateAppDto.appKey) {
      return { valid: false };
    }

    return { valid: true, app: app.toJSON() };
  }

  async remove(id: string, userId: string): Promise<void> {
    const result = await this.appModel.deleteOne({ _id: id, userId }).exec();

    if (result.deletedCount === 0) {
      throw new NotFoundException("App not found");
    }
  }

}


