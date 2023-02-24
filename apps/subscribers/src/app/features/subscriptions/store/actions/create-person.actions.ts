import { createAction, props } from '@ngrx/store';
import { IPerson, IPersonCreate } from '../../interfaces/IPerson';

export const loadCreatePerson = createAction(
    '[Ceate Person Page] LoadPerson',
    props<{ data: IPersonCreate }>()

);

export const loadCreatePersonSuccess = createAction(
    '[Ceate Person Page] loadCreatePerson Success',
    props<{ person: IPerson }>()
);

export const loadCreatePersonError = createAction(
    '[Ceate Person Page] loadCreatePerson Error',
    props<{ payload: any }>()
);