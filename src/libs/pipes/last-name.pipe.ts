import { Pipe, PipeTransform } from '@angular/core';
import { IndividualCustomers } from '../models/individual-customers';

@Pipe({
  name: 'lastName'
})
export class LastNamePipe implements PipeTransform {

  transform(value:IndividualCustomers[],lastName:string ): IndividualCustomers[] {
  return value.filter(name => !lastName || name.lastName?.toLocaleLowerCase().includes(lastName.toLocaleLowerCase()))
  

}
}