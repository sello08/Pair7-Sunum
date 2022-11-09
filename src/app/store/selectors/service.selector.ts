import { Service } from 'src/libs';
import { createFeatureSelector, createSelector } from "@ngrx/store";



export const serviceSelector = createSelector(
    createFeatureSelector('service'),
    (state: Service[]) => {
        return state
    }
)