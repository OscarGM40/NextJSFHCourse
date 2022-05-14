import { DeleteOutlined, SaveOutlined } from '@mui/icons-material';
import {
  capitalize,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  IconButton,
} from '@mui/material';
import { ChangeEvent, useContext, useMemo, useState } from 'react';
import { GetServerSideProps } from 'next';
import { Layout } from '../../components/layouts';
import { EntryStatus } from '../../interfaces/entry';
import { Entry } from '../../interfaces';
import { dbEntries } from '../../database';
import { EntriesContext } from '../../context/entries';
import { useRouter } from 'next/router';
import { dateFunctions } from '../../utils';

const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished'];

interface Props {
  entry: Entry;
}
const EntryPage: React.FC<Props> = ({ entry }) => {
  const router = useRouter();
  const { updateEntry, deleteEntry } = useContext(EntriesContext);

  const [inputValue, setInputValue] = useState(entry.description);
  const [status, setStatus] = useState<EntryStatus>(entry.status);
  const [touched, setTouched] = useState(false);

  const isNotValid = useMemo(
    () => inputValue.length <= 0 && touched,
    [inputValue, touched]
  );

  const onTextFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(() => e.target.value);
    setTouched(true);
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(() => e.target.value as EntryStatus);
  };

  const onSaveEntry = () => {
    if (inputValue.trim().length === 0) return;
    updateEntry(
      {
        ...entry,
        description: inputValue,
        status,
      },
      true
    );
  };
  const onDelete = () => {
    deleteEntry(entry, true);
    router.push('/');
  };
  return (
    <Layout title={inputValue.substring(0, 20) + '...'}>
      <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card>
            <CardHeader
              title={`Entrada:`}
              subheader={
                'Creada hace:' +
                dateFunctions.getFormatDistanceToNow(entry.createdAt)
              }
            />
            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                placeholder="Nueva entrada"
                autoFocus
                multiline
                fullWidth
                label="Nueva entrada"
                value={inputValue}
                onChange={onTextFieldChange}
                helperText={
                  isNotValid
                    ? 'Debe ingresar un valor'
                    : 'Escribe aquí la descripción de la entrada'
                }
                onBlur={() => setTouched(true)}
                error={isNotValid}
              />
              <FormControl>
                <FormLabel>Estado:</FormLabel>
                <RadioGroup row value={status} onChange={onStatusChange}>
                  {validStatus.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio />}
                      label={capitalize(option)}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>
            <CardActions>
              <Button
                startIcon={<SaveOutlined />}
                variant="contained"
                fullWidth
                onClick={onSaveEntry}
                disabled={inputValue.length <= 0}
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <IconButton
        onClick={onDelete}
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          backgroundColor: 'error.dark',
        }}
      >
        <DeleteOutlined />
      </IconButton>
    </Layout>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.params as { id: string };

  const entry = await dbEntries.getEntryById(id);

  if (!entry) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      entry,
    },
  };
};

export default EntryPage;
