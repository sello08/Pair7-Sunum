import { on, createReducer } from '@ngrx/store';
import { setCorporateCustomer, setIndividualCustomer, setService } from './customer.actions';
import { IndividualCustomers } from 'src/libs/models/individual-customers';
import { CorporateCustomers } from 'src/libs/models/corporate-customers';
import { Service } from '../../libs/models/service';

export interface CustomerState {
    individualCustomer: IndividualCustomers | null;
    corporateCustomer: CorporateCustomers| null;
    service : Service | null;
} 

export const initialState : CustomerState = {
    individualCustomer: null,
    corporateCustomer: null,
    service : null,
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
)

