import { UIState } from './UIProvider';

type UIAction =
  | { type: 'UI - Open Sidebar' }
  | { type: 'UI - Close Sidebar' }
  | { type: 'UI - setIsAddingEntry'; payload: boolean };

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
    case 'UI - setIsAddingEntry':
      return {
        ...state,
        isAddingEntry: action.payload,
      };
    default:
      return state;
  }
};
