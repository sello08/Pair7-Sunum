import { Pipe, PipeTransform } from '@angular/core';
import { CorporateCustomers } from '../models/corporate-customers';
import { IndividualCustomers } from '../models/individual-customers';

@Pipe({
  name: 'birthDate'
})
export class BirthDatePipe implements PipeTransform {


  transform(value:IndividualCustomers[], item: string): IndividualCustomers[] {
    let dt = new Date();
    return value.filter(name => !item || new Date(name.birthDate) > new Date(item) )
  }

}
