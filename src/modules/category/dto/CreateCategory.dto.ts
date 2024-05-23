import { IsNotEmpty } from "class-validator"

export class CreateCategoryDTO {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  description: string

  @IsNotEmpty()
  imageUrl: string
}

