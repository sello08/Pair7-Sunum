import { createAction, props} from '@ngrx/store';
import { Service } from 'src/libs';


export const addService = createAction('ADD SERVICE', props<{service:Service}>()) 


