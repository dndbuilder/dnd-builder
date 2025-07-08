import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Page, PageDocument } from "./entities/page.entity";
import { CreatePageDto } from "./dto/create-page.dto";
import { UpdatePageDto } from "./dto/update-page.dto";
import { User } from "../users/entities/user.entity";

@Injectable()
export class PagesService {
  constructor(
    @InjectModel(Page.name)
    private pageModel: Model<PageDocument>
  ) {}

  async create(createPageDto: CreatePageDto, user: User): Promise<Page> {
    try {
      // Check if a page with the same name already exists for this user
      const existingPage = await this.pageModel
        .findOne({
          name: createPageDto.name,
          userId: user.id,
        })
        .exec();

      if (existingPage) {
        throw new ConflictException(`A page with the name "${createPageDto.name}" already exists`);
      }

      const createdPage = await this.pageModel.create({
        ...createPageDto,
        userId: user.id,
      });
      return createdPage;
    } catch (error) {
      // Handle MongoDB duplicate key error (in case the check above fails due to race conditions)
      if (error.name === "MongoServerError" && error.code === 11000) {
        throw new ConflictException(`A page with the name "${createPageDto.name}" already exists`);
      }
      throw error;
    }
  }

  async findAll(userId: string): Promise<Page[]> {
    return this.pageModel.find({ userId }).exec();
  }

  async findOne(id: string, userId: string): Promise<Page> {
    const page = await this.pageModel.findOne({ _id: id, userId }).exec();

    if (!page) {
      throw new NotFoundException("Page not found");
    }

    return page;
  }

  async update(id: string, updatePageDto: UpdatePageDto, userId: string): Promise<Page> {
    try {
      // If the name is being updated, check for duplicates
      if (updatePageDto.name) {
        const existingPage = await this.pageModel
          .findOne({
            _id: { $ne: id }, // Exclude the current page
            name: updatePageDto.name,
            userId,
          })
          .exec();

        if (existingPage) {
          throw new ConflictException(
            `A page with the name "${updatePageDto.name}" already exists`
          );
        }
      }

      const page = await this.pageModel
        .findOneAndUpdate({ _id: id, userId }, updatePageDto, { new: true })
        .exec();

      if (!page) {
        throw new NotFoundException("Page not found");
      }

      return page;
    } catch (error) {
      // Handle MongoDB duplicate key error (in case the check above fails due to race conditions)
      if (error.name === "MongoServerError" && error.code === 11000) {
        throw new ConflictException(`A page with the name "${updatePageDto.name}" already exists`);
      }
      throw error;
    }
  }

  async remove(id: string, userId: string): Promise<void> {
    const result = await this.pageModel.deleteOne({ _id: id, userId }).exec();

    if (result.deletedCount === 0) {
      throw new NotFoundException("Page not found");
    }
  }
}
