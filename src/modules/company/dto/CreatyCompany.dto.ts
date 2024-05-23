import { IsNotEmpty } from 'class-validator';

export class CreateCompanyDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  name: string;
  @IsNotEmpty({ message: 'Digite uma descrição' })
  description: string;
  @IsNotEmpty({ message: 'Insira uma imagem' })
  imageUrl: string;
}
