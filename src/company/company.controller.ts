import { CompanyService } from './company.service';
import { CreateCompanyDTO } from './dto/create-company.dto';
import { Controller, Post, Get, Put, Delete, Body, Param, Query, Res, HttpStatus, NotFoundException, UseInterceptors } from '@nestjs/common';
// import { MorganInterceptor } from 'nest-morgan';

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

    // company/delete?companyId=id
    // @UseInterceptors(MorganInterceptor('combined'))
    @Delete('/delete')
    async deleteCompany(@Res() res, @Query('companyId') companyId) {
        try {
            const company = await this.companyService.deleteCompany(companyId);
            if (!company) throw new NotFoundException('company does not exist');
            return res.status(HttpStatus.OK).json({
                message: 'Company Deleted Successfully',
                company
            });
        } catch (e) {
            return res.status(HttpStatus.NOT_FOUND).json({
                message: e.message
            });
        }
    }

    // company/update?companyId=id
    @Put('/update')
    async updateCompany(@Res() res, @Body() createCompanyDTO: CreateCompanyDTO, @Query('companyId') companyId) {
        try {
            const company = await this.companyService.updateCompany(companyId, createCompanyDTO);
            if (!company) throw new NotFoundException('company does not exist');
            return res.status(HttpStatus.OK).json({
                message: 'Company Updated Successfully',
                company
            });
        } catch (e) {
            return res.status(HttpStatus.NOT_FOUND).json({
                message: e.message
            });
        }
    }
}
