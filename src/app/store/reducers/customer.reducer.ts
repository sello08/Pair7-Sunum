
import { on, createReducer } from '@ngrx/store';
import { addCorpCustomer, addIndCustomer } from '../actions/customer.actions';
import { IndividualCustomers } from 'src/libs/models/individual-customers';
import { CorporateCustomers } from 'src/libs/models/corporate-customers';

export const initialState : IndividualCustomers[] = [];


export const initialState2 : CorporateCustomers[] = [];



export const indCustomerReducer = createReducer(
    initialState,
    on(addIndCustomer, (state, {customer}) => ([...state, customer]))
)

export const corpCustomerReducer = createReducer(
    initialState2,
    on(addCorpCustomer, (state, {customer}) => ([...state, customer]))
)

