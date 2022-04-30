import { createContext } from 'react';

interface UIProps {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  /* methods */
  openSideMenu: () => void;
  closeSideMenu: () => void;
  setIsAddingEntry: (isAddingEntry: boolean) => void;
}

export const UIContext = createContext({} as UIProps);
