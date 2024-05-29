import { IsNotEmpty, IsUUID, IsInt } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  @IsInt()
  eventId: number;
}
