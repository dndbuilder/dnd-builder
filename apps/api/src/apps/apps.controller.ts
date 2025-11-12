import { Controller, Get, Post, Body, Param, Delete, UseGuards } from "@nestjs/common";
import { AppsService } from "./apps.service";
import { CreateAppDto } from "./dto/create-app.dto";
import { ValidateAppDto } from "./dto/validate-app.dto";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { User } from "../users/entities/user.entity";
import { App } from "./entities/app.entity";

@Controller("apps")
export class AppsController {
  constructor(private readonly appsService: AppsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createAppDto: CreateAppDto, @CurrentUser() user: User): Promise<App & { appKey: string }> {
    return this.appsService.create(createAppDto, user);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(@CurrentUser() user: User): Promise<App[]> {
    return this.appsService.findAll(user.id);
  }

  @Get(":id")
  @UseGuards(JwtAuthGuard)
  async findOne(@Param("id") id: string, @CurrentUser() user: User): Promise<App> {
    return this.appsService.findOne(id, user.id);
  }

  @Post("validate")
  async validate(@Body() validateAppDto: ValidateAppDto): Promise<{ valid: boolean }> {
    const result = await this.appsService.validate(validateAppDto);
    return { valid: result.valid };
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  async remove(@Param("id") id: string, @CurrentUser() user: User): Promise<void> {
    return this.appsService.remove(id, user.id);
  }
}



