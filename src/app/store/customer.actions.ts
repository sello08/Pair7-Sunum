import { createAction, props} from '@ngrx/store';
import { CorporateCustomers } from 'src/libs/models/corporate-customers';
import { IndividualCustomers } from 'src/libs/models/individual-customers';
import { Service } from '../../libs/models/service';


export const setIndividualCustomer = createAction('SET INDCUSTOMER', props<{customer:IndividualCustomers} >()) 
export const setCorporateCustomer = createAction('SET CORPCUSTOMER', props<{customer:CorporateCustomers}>()) 
export const setService = createAction('SET SERVICE', props<{service:Service}>()) 