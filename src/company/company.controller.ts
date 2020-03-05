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

    // company/list
    @Get('/list')
    async getCompanies(@Res() res) {
        try {
            const companies = await this.companyService.getCompanies();
            if (!companies) throw new NotFoundException('companies do not exist');
            return res.status(HttpStatus.OK).json(companies);
        } catch (e) {
            return res.status(HttpStatus.NOT_FOUND).json({
                message: e.message
            });
        }
    }

    // company/id
    @Get('/:companyId')
    async getCompany(@Res() res, @Param('companyId') companyId) {
        try {
            const company = await this.companyService.getCompany(companyId);
            if (!company) throw new NotFoundException('company does not exist');
            return res.status(HttpStatus.OK).json(company);
        } catch (e) {
            return res.status(HttpStatus.NOT_FOUND).json({
                message: e.message
            });
        }
    }





}
