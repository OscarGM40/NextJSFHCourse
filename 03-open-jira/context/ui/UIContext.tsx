import { createContext } from 'react';

interface UIProps {
  sidemenuOpen: boolean;
  /* methods */
  openSideMenu: () => void;
  closeSideMenu: () => void;
}

export const UIContext = createContext({} as UIProps);
