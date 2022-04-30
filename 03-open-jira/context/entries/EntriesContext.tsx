import { createContext } from 'react';
import { Entry } from '../../interfaces';

interface EntriesProps {
  entries: Entry[]; // falta el tipo de dato del arreglo
  addNewEntry: (desc: string) => void;
}

export const EntriesContext = createContext({} as EntriesProps);
