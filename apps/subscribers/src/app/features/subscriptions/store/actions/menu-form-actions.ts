import { createAction, props } from '@ngrx/store';
/**
 * Action to open/close menu form
 */
export const toggleMenuForm = createAction(
  '[Menu Form] toggle Menu ',
  props<{ isOpen: boolean; }>()
);
