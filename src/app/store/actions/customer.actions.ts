

import { createAction, props} from '@ngrx/store';
import { CorporateCustomers } from 'src/libs/models/corporate-customers';
import { IndividualCustomers } from 'src/libs/models/individual-customers';

export const addIndCustomer = createAction('ADD INDCUSTOMER', props<{customer:IndividualCustomers} >()) 
export const addCorpCustomer = createAction('ADD CORPCUSTOMER', props<{customer:CorporateCustomers}>()) 