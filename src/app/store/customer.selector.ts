import { CustomerState, initialState } from './customer.reducer';
import { createFeatureSelector, createSelector } from "@ngrx/store";



export const indCustomerSelector = createSelector(
    createFeatureSelector('customer'),
    (state: CustomerState) => {
        return state.individualCustomer
    }
)


export const corpCustomerSelector = createSelector(
    createFeatureSelector('customer'),
    (state: CustomerState) => {
        return state.corporateCustomer
    }
)

export const serviceSelector = createSelector(
    createFeatureSelector('customer'),
    (state: CustomerState) => {
        return state.service
    }
)
