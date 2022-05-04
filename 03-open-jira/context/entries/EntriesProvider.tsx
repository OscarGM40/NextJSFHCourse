import { FC, useReducer } from 'react';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';
import { v4 as uuidv4 } from 'uuid';

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        'Pending: lNisi sint do eiusmod enim commodo eu laborum ea reprehenderit do.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        'In progress: lNisi sint do eiusmod enim commodo eu laborum ea reprehenderit do.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description:
        'Finished: lNisi sint do eiusmod enim commodo eu laborum ea reprehenderit do.',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ],
};

interface EntriesProviderProps {
  children: React.ReactNode;
}

export const EntriesProvider: FC<EntriesProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      status: 'pending',
      createdAt: Date.now(),
    };
    dispatch({
      type: '[Entries] - Add-Entry',
      payload: newEntry,
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
