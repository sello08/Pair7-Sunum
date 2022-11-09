import { Pipe, PipeTransform } from '@angular/core';
import { CorporateCustomers } from '../models/corporate-customers';
@Pipe({
  name: 'companyName'
})
export class CompanyNamePipe implements PipeTransform {

  transform(value:CorporateCustomers[], companyName:string): CorporateCustomers[] {
    return value.filter((filter) => !companyName || filter.companyName?.toLocaleLowerCase().includes(companyName.toLocaleLowerCase()) );

  }

}
