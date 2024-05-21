import { IsEmail, IsEnum, IsNotEmpty, MinLength } from 'class-validator';
import { UserType } from '../utils/user-type.enum';

export class CreateUserDTO {
  @IsNotEmpty({message: 'O nome não pode ser vazio'})
  name: string;

  @IsEmail({},{message: 'Email inválido'})
  @IsNotEmpty({message: 'O email não pode ser vazio'})
  email: string;

  @MinLength(6, {message: 'A senha deve ter pelo menos 6 caracteres'})
  password: string;

  @IsEnum(UserType)
  type: UserType;
}