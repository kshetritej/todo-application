import { IsOptional, IsString, Length } from "class-validator";

export class UpdateTodoValidator {
  @IsOptional()
  @IsString()
  Title?: string;

  @IsOptional()
  @IsString()
  Description?: string;

  @IsOptional()
  @IsString()
  Urgency: string;

  @IsOptional()
  @IsString()
  DueDate?: string;
}