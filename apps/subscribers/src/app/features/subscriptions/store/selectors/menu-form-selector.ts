import { createSelector } from '@ngrx/store';
import {
  selectIsOpen,
} from '../reducers/menu-form-reducer';

export const selectIsOpenMenuForm = createSelector(
  selectIsOpen,
  (isOpen) => ({ isOpen })
);


