import { createContext } from 'react';

interface UIProps {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
  /* methods */
  openSideMenu: () => void;
  closeSideMenu: () => void;
  setIsAddingEntry: (isAddingEntry: boolean) => void;
  startDragging: () => void;
  endDragging: () => void;
}

export const UIContext = createContext({} as UIProps);
