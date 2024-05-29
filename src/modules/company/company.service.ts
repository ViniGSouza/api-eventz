import { Injectable } from '@nestjs/common';
import { CreateCompanyDTO } from './dto/CreateCompany.dto';
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

  async findAll() {
    try {
      const companies = await this.prismaService.company.findMany();
      return companies;
    } catch (error) {
      throw `Erro ao buscar as empresas: ${error}`;
    }
  }

  async findOne(id: string) {
    try {
      const company = await this.prismaService.company.findUnique({
        where: { id },
      });
      if (!company) {
        throw `Empresa com id ${id} não encontrada`;
      }
      return company;
    } catch (error) {
      throw `Erro ao buscar a empresa: ${error}`;
    }
  }
}
