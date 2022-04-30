import { Entry } from '../../interfaces';
import { EntriesState } from './';

type EntriesAction = { type: '[Entries] - Add-Entry'; payload: Entry };

export const entriesReducer = (state: EntriesState, action: EntriesAction) => {
  switch (action.type) {
    case '[Entries] - Add-Entry':
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
    default:
      return state;
  }
};
