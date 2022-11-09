import { Pipe, PipeTransform } from '@angular/core';
import { CorporateCustomers } from '../models/corporate-customers';

@Pipe({
  name: 'taxNumber'
})
export class TaxNumberPipe implements PipeTransform {

  transform(value:CorporateCustomers[], taxNumber:number): CorporateCustomers[] {
    return value.filter(tax => !taxNumber|| tax.taxNumber?.toString().includes(taxNumber.toString()))
  }

}
