
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CorporateCustomers } from "src/libs/models/corporate-customers";
import { IndividualCustomers } from "src/libs/models/individual-customers";



export const indCustomerSelector = createSelector(
    createFeatureSelector('indCustomer'),
    (state: IndividualCustomers[]) => {
        return state
    }
)


export const corpCustomerSelector = createSelector(
    createFeatureSelector('corpCustomer'),
    (state: CorporateCustomers[]) => {
        return state
    }
)