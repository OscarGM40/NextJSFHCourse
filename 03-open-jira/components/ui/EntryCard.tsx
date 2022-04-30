import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { DragEvent } from 'react';
import { Entry } from '../../interfaces';
interface Props {
  entry: Entry;
  color: string;
}
const EntryCard: React.FC<Props> = ({ entry, color }) => {
  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    // TODO modificar el estado para saber que estoy arrastrando una card,también pondremos más opacas las card en este modo
    /* la event.dataTransfer me permite establecer cierto tipo de información(solo pueden ser strings),aplicando setData() */
    /* fijate que con el _id de la card ya me es suficiente */
    event.dataTransfer.setData('ID', entry._id);
    console.log(event);
  };
  const onDragEnd = (event: DragEvent<HTMLDivElement>) => {
    // todo cancelar on drag
  };
  return (
    <Card
      sx={{ marginBottom: 1, backgroundColor: color }}
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
