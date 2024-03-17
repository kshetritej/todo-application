import { IsNotEmpty, IsString, Length } from "class-validator";

export class AddTodoValidator {
  @IsString()
  @Length(2, 15)
  @IsNotEmpty()
  Title: string;

  @IsString()
  @IsNotEmpty()
  @Length(10, 1000)
  Description: string;

  @IsString()
  @IsNotEmpty()
  Urgency: string;

  @IsNotEmpty()
  @IsString()
  DueDate: string;

}