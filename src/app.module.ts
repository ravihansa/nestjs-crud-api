import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyModule } from './company/company.module';
// import { CompanyController } from './company/company.controller';
// import { CompanyService } from './company/company.service';

@Module({

  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/companyDB', {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    }),
    CompanyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
