import { Controller, Post, Body} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDTO } from './dto/CreatyCompany.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDTO) {
    return this.companyService.create(createCompanyDto);
  }

}
