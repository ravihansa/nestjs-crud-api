import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from './interfaces/company.interface';
import { CreateCompanyDTO } from './dto/create-company.dto';

@Injectable()
export class CompanyService {

    constructor(@InjectModel('Company') private readonly companyModel: Model<Company>) { }

    async createCompany(createCompanyDTO: CreateCompanyDTO): Promise<Company> {
        const company = new this.companyModel(createCompanyDTO);
        return company.save();
    }

    async getCompanies(): Promise<Company[]> {
        const company = await this.companyModel.find();
        return company;
    }

    async getCompany(companyId: string): Promise<Company> {
        const company = await this.companyModel.findById(companyId);
        return company;
    }

    
}
