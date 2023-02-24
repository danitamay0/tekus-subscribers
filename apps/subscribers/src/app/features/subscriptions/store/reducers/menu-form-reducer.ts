import { createFeature, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/menu-form-actions';

export interface SideFormState {
  isOpen: boolean;
}

export const menuFormInitialState: SideFormState = {
  isOpen: false,
};

export const sideFomFeature = createFeature({
  name: 'sideFormReducer',
  reducer: createReducer<SideFormState>(
    menuFormInitialState,
    on(actions.toggleMenuForm, (state, { isOpen }) => ({
      ...state,
      isOpen,

    }))
  ),
});

export const { selectIsOpen } = sideFomFeature;
