import { on, createReducer } from '@ngrx/store';
import { Service } from 'src/libs';
import { addService } from '../actions/service.actions';

export const initialState : Service[] = [];


export const serviceReducer = createReducer(
    initialState,
    on(addService, (state, {service}) => ([...state, service]))
)


