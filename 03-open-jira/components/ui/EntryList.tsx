import { List, Paper } from '@mui/material';
import { FC, useContext, useMemo } from 'react';
import { EntriesContext } from '../../context/entries';
import { EntryStatus } from '../../interfaces';
import { EntryCard } from './';

interface Props {
  status: EntryStatus;
  color: string;
}
const EntryList: FC<Props> = ({ status, color }) => {
  const { entries } = useContext(EntriesContext);

  /*  a menos que los entries cambien por qué no memorizar este proceso? realmente es mejor que me devuelva el memorizado,no? */
  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  return (
    /* usaré un div en vez de un Box para ver al onDrag */
    <div>
      <Paper
        sx={{
          height: 'calc(100vh - 230px)',
          overflow: 'auto',
          backgroundColor: 'transparent',
          padding: '1px 6px',
          marginTop: '10px',
        }}
      >
        {/* TODO: cambiar estilo si esta en onDrag */}
        <List sx={{ opacity: 1 }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} color={color} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
export default EntryList;
