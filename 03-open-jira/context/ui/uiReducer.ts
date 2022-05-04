import { UIState } from './UIProvider';

type UIAction =
  | { type: 'UI - Open Sidebar' }
  | { type: 'UI - Close Sidebar' }
  | { type: 'UI - SetIsAddingEntry'; payload: boolean }
  | { type: 'UI - StartDragging' }
  | { type: 'UI - EndDragging' };

export const uiReducer = (state: UIState, action: UIAction): UIState => {
  switch (action.type) {
    case 'UI - Open Sidebar':
      return {
        ...state,
        sidemenuOpen: true,
      };
    case 'UI - Close Sidebar':
      return {
        ...state,
        sidemenuOpen: false,
      };
    case 'UI - SetIsAddingEntry':
      return {
        ...state,
        isAddingEntry: action.payload,
      };
    case 'UI - StartDragging':
      return {
        ...state,
        isDragging: true,
      };
    case 'UI - EndDragging':
      return {
        ...state,
        isDragging: false,
      };
    default:
      return state;
  }
};
