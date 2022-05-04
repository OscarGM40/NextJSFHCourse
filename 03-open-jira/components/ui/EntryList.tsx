import { List, Paper } from '@mui/material';
import { DragEvent, FC, useContext, useMemo } from 'react';
import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';
import { EntryStatus } from '../../interfaces';
import { EntryCard } from './';
import styles from './EntryList.module.css';

interface Props {
  status: EntryStatus;
  color: string;
}
const EntryList: FC<Props> = ({ status, color }) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext(UIContext);

  /*  a menos que los entries cambien por qué no memorizar este proceso? realmente es mejor que me devuelva el memorizado,no? */
  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    // event.preventDefault();
    const id = event.dataTransfer.getData('ID');
    // console.log(id, 'id');
    /* recuerda que find devuelve undefined si no encuentra el elemento.Fijate que en nuestra app la Card tendrá un id seguro */
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const entry = entries.find((entry) => entry._id === id)!;
    entry.status = status;
    updateEntry(entry);
    // updateEntry({ ...entry, status });
    endDragging(); // importantisimo llamar al endDragging que pone isDragging a  false
  };

  /* ojo,un div que reciba el drop necesita activar en el onDragOver esta caracteristica,se hace llamando al preventDefault  */
  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    /* usaré un div para tener visión sobre el evento nativo onDrop,y recibir el id de la card arrastrada,ya que ni Box ni Paper tienen ese evento programado en mui */
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ''}
    >
      <Paper
        sx={{
          height: 'calc(100vh - 230px)',
          overflow: 'auto',
          backgroundColor: 'transparent',
          padding: '1px 6px',
          marginTop: '10px',
        }}
      >
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all 0.3s' }}>
          {entriesByStatus.map((entry) => (
            <EntryCard
              key={entry._id}
              entry={entry}
              color={color}
              isDragging={isDragging}
            />
          ))}
        </List>
      </Paper>
    </div>
  );
};
export default EntryList;
