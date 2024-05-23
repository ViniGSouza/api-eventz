import { IsNotEmpty } from 'class-validator';

export class CreateEventDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  name: string;

  @IsNotEmpty({ message: 'O id não pode ser vazio' })
  companyId: string;

  @IsNotEmpty({ message: 'A categoria não pode estar vazia' })
  categoryId: number;

  @IsNotEmpty({ message: 'Digite uma descrição' })
  description: string;

  @IsNotEmpty({ message: 'Insira uma imagem' })
  imageUrl: string;

  @IsNotEmpty({ message: 'Insira o valor ' })
  price: number;

  @IsNotEmpty({ message: 'Insira o desconto' })
  discount: number;
}
