import { Controller, Post, Res, HttpStatus, Body, Get, Put, Delete, Param, Query, NotFoundException, UseInterceptors } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDTO } from './dto/create-company.dto';


@Controller('company')
export class CompanyController {
    constructor(private companyService: CompanyService) { }

    // company/create
    @Post('/create')
    async createCompany(@Res() res, @Body() createCompanyDTO: CreateCompanyDTO) {
        try {
            const company = await this.companyService.createCompany(createCompanyDTO);
            return res.status(HttpStatus.OK).json({
                message: 'Company Created Successfully',
                company
            });
        } catch (e) {
            return res.status(HttpStatus.NOT_ACCEPTABLE).json({
                message: e.message
            });
        }
    }





}
