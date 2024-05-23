import { Injectable } from '@nestjs/common';
import { CreateCompanyDTO } from './dto/CreatyCompany.dto';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class CompanyService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateCompanyDTO) {
    try {
      const company = await this.prismaService.company.create({
        data,
      });
      return company;
    } catch (error) {
      throw `Erro ao criar uma empresa: ${error}`;
    }
  }
}
