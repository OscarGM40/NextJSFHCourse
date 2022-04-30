import { List, Paper } from '@mui/material';
import { DragEvent, FC, useContext, useMemo } from 'react';
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

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    // event.preventDefault();
    const id = event.dataTransfer.getData('ID');
    console.log(id, 'id');
  };

  /* ojo,un div que reciba el drop necesita activar en el onDragOver esta caracteristica,se hace llamando al preventDefault  */
  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    /* usaré un div para tener visión sobre el evento nativo onDrop,y recibir el id de la card arrastrada,ya que ni Box ni Paper tienen ese evento programado en mui */
    <div onDrop={onDropEntry} onDragOver={allowDrop}>
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
