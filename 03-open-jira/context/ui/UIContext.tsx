import { createContext } from 'react';

interface UIProps {
  sidemenuOpen: boolean;
}

export const UIContext = createContext({} as UIProps);