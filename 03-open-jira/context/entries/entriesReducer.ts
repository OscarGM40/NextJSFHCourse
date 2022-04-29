import { EntriesState } from './';

type EntriesAction = { type: '[Entries] - ActionName' };

export const entriesReducer = (state: EntriesState, action: EntriesAction) => {
  switch (action.type) {
    /*    case '[Entries] - ActionName':
      return {
        ...state,
        prop: value,
      }; */
    default:
      return state;
  }
};
