import { createAction, props} from '@ngrx/store';
import { Users } from 'src/libs';
import { CorporateCustomers } from 'src/libs/models/corporate-customers';
import { IndividualCustomers } from 'src/libs/models/individual-customers';
import { Service } from '../../libs/models/service';


export const setIndividualCustomer = createAction('SET INDCUSTOMER', props<{customer:IndividualCustomers} >()) 
export const setCorporateCustomer = createAction('SET CORPCUSTOMER', props<{customer:CorporateCustomers}>()) 
export const setService = createAction('SET SERVICE', props<{service:Service}>()) 
export const setTokenUserModel = createAction(
    '[Auth] Set Token User Model', //: Benzersiz key verdik. Bu action type/id olucak.
     props<{ UserModel: Users }>() //: inline bir interface yazdık.
     //: Bu interface'in içindeki property'ler, action'ın içindeki property'ler/payload olucak.
  );
  
  export const deleteTokenUserModel = createAction(
    '[Auth] Delete Token User Model'
  );
  export const resetCustomerState = createAction('SET INITIAL')  // GET store initial values......
