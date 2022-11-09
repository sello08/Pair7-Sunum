import { Pipe, PipeTransform } from '@angular/core';
import { IndividualCustomers } from '../models/individual-customers';

@Pipe({
  name: 'firtName'
})
export class FirtNamePipe implements PipeTransform {

  transform(value:IndividualCustomers[],firstName:string ): IndividualCustomers[] {
    return value.filter(name => !firstName|| name.lastName?.toLocaleLowerCase().includes(firstName.toLocaleLowerCase()))
   

}
}
