import { Entry } from '../../interfaces';
import { EntriesState } from './';

type EntriesAction =
  | { type: '[Entries] - Add-Entry'; payload: Entry }
  | {
      type: '[Entries] - Update-Entry';
      payload: { entry: Entry; showSnackbar: boolean };
    }
  | { type: '[Entries] - Get-Initial-Entries'; payload: Entry[] }
  | { type: '[Entry] - Entry-Deleted'; payload: Entry };

export const entriesReducer = (state: EntriesState, action: EntriesAction) => {
  switch (action.type) {
    case '[Entries] - Add-Entry':
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
    case '[Entries] - Get-Initial-Entries':
      return {
        ...state,
        entries: [...action.payload],
      };
    case '[Entries] - Update-Entry':
      return {
        ...state,
        /* fijate que me podrian cambiar cualquier cosa,puede ser buena idea dejar solo que se cambie el status y la desc */
        entries: state.entries.map((entry) => {
          /* de esta forma sólo se cambian estas dos props si el id coincide. */
          if (entry._id === action.payload.entry._id) {
            entry.status = action.payload.entry.status;
            entry.description = action.payload.entry.description;
          }
          return entry;
        }),
      };
    case '[Entry] - Entry-Deleted':
      return {
        ...state,
        entries: state.entries.filter(
          (entry) => entry._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};
