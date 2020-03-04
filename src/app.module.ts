import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyController } from './company/company.controller';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [CompanyModule],
  controllers: [AppController, CompanyController],
  providers: [AppService],
})
export class AppModule {}
