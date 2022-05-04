import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

interface UIProviderProps {
  children: React.ReactNode;
}

export const UIProvider: FC<UIProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: 'UI - Open Sidebar' });
  };

  const closeSideMenu = () => {
    dispatch({ type: 'UI - Close Sidebar' });
  };

  const setIsAddingEntry = (payload: boolean) => {
    dispatch({ type: 'UI - SetIsAddingEntry', payload });
  };

  const startDragging = () => {
    dispatch({ type: 'UI - StartDragging' });
  };

  const endDragging = () => {
    dispatch({ type: 'UI - EndDragging' });
  };

  return (
    <UIContext.Provider
      value={{
        // sidemenuOpen: state.sidemenuOpen,
        // isAddingEntry: state.isAddingEntry,
        ...state, // mejor usar el spread operator
        openSideMenu,
        closeSideMenu,

        setIsAddingEntry,

        startDragging,
        endDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
