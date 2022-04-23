import { List, Paper } from '@mui/material';
import { EntryCard } from './';

const EntryList = () => {
  return (
    /* usaré un div en vez de un Box para ver al onDrag */
    <div>
      <Paper
        sx={{
          height: 'calc(100vh - 200px)',
          overflow: 'auto',
          backgroundColor: 'transparent',
          padding: '1px 6px',
        }}
      >
        {/* TODO: cambiar estilo si esta en onDrag */}
        <List sx={{ opacity: 1 }}>
          <EntryCard />
        </List>
      </Paper>
    </div>
  );
};
export default EntryList;
