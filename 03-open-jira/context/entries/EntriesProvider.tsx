import { FC, useEffect, useReducer } from 'react';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';
// import { v4 as uuidv4 } from 'uuid';
import { entriesApi } from '../../apis';

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [],
};

interface EntriesProviderProps {
  children: React.ReactNode;
}

export const EntriesProvider: FC<EntriesProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>('/entries');
    dispatch({ type: '[Entries] - Get-Initial-Entries', payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  const addNewEntry = async (description: string) => {
    /*     const newEntry: Entry = {
      _id: uuidv4(),
      description,
      status: 'pending',
      createdAt: Date.now(),
    }; */
    const resp = await entriesApi.post<Entry>('/entries', { description });
    dispatch({
      type: '[Entries] - Add-Entry',
      payload: resp.data,
    });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({
      type: '[Entries] - Update-Entry',
      payload: entry,
    });
  };
  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
