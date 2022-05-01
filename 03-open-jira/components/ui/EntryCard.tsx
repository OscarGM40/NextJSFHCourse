import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { DragEvent, useContext } from 'react';
import { UIContext } from '../../context/ui';
import { Entry } from '../../interfaces';
interface Props {
  entry: Entry;
  color: string;
  isDragging: boolean;
}
const EntryCard: React.FC<Props> = ({ entry, color, isDragging }) => {
  const { startDragging, endDragging } = useContext(UIContext);
  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    startDragging();
    /* la event.dataTransfer me permite establecer cierto tipo de información(solo pueden ser strings),aplicando setData() */
    /* fijate que con el _id de la card ya me es suficiente */
    event.dataTransfer.setData('ID', entry._id);
  };
  const onDragEnd = () => {
    endDragging();
  };
  return (
    <Card
      sx={{
        marginBottom: 1,
        backgroundColor: color,
        borderRadius: isDragging ? '8px' : '5px',
        border: isDragging ? '2px solid white' : 'none',
      }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            {entry.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 2 }}
        >
          <Typography variant="body2">hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
export default EntryCard;
