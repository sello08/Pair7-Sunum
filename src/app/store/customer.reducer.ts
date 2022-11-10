import { on, createReducer } from '@ngrx/store';
import { deleteTokenUserModel, setCorporateCustomer, setIndividualCustomer, setService, setTokenUserModel, resetCustomerState } from './customer.actions';
import { IndividualCustomers } from 'src/libs/models/individual-customers';
import { CorporateCustomers } from 'src/libs/models/corporate-customers';
import { Service } from '../../libs/models/service';
import { Users } from 'src/libs';

export interface CustomerState {
    individualCustomer: IndividualCustomers | null;
    corporateCustomer: CorporateCustomers| null;
    service : Service | null;
    UserModel: Users | null;
} 

export const initialState : CustomerState = {
    individualCustomer: null,
    corporateCustomer: null,
    service : null,
    UserModel: null,
};

export const customerReducer = createReducer(
    initialState,
    on(setIndividualCustomer, (state, {customer}) => {
        return {
            ...state,
            individualCustomer: customer
        }
    }),
    on(setCorporateCustomer, (state, {customer}) => {
        return {
            ...state,
            corporateCustomer: customer
        }
    }),
    on(setService, (state, {service}) => {
        return {
            ...state,
            service: service
        }
    }),
    on(resetCustomerState, (state) => {
      
      return {
       ...initialState
      }
  }),
    on(
        setTokenUserModel, 
        (currentState, action) => {
       
          return {
            ...currentState,
            UserModel: action.UserModel,
          };
        }
      ),
      on(deleteTokenUserModel, (currentState) => {
        return {
          ...currentState,
          tokenUserModel: null, // 0x1234 (hexadecimal) -> 0
        };
      })
)

