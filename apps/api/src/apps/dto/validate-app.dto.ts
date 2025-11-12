import { IsNotEmpty, IsString } from "class-validator";

export class ValidateAppDto {
  @IsString({ message: "appId must be a string" })
  @IsNotEmpty({ message: "appId is required" })
  appId: string;

  @IsString({ message: "appKey must be a string" })
  @IsNotEmpty({ message: "appKey is required" })
  appKey: string;
}



