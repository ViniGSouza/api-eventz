import { Injectable } from '@nestjs/common';
import { CreateCompanyDTO } from './dto/CreatyCompany.dto';

@Injectable()
export class CompanyService {
  create(createCompanyDto: CreateCompanyDTO) {
    return 'This action adds a new company';
  }

}
