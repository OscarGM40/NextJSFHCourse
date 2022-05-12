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
import { ChangeEvent, useState } from 'react';
import { Layout } from '../../components/layouts';
import { EntryStatus } from '../../interfaces/entry';

const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished'];

const EntryPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState<EntryStatus>('pending');
  const [touched, setTouched] = useState(false);

  const onTextFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(() => e.target.value);
    setTouched(true);
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(() => e.target.value as EntryStatus);
  };

  const onSaveEntry = () => {
    if (inputValue.length === 0) return;
    console.log({ inputValue, status });
  };

  return (
    <Layout title="...">
      <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card>
            <CardHeader
              title={`Entrada: ${inputValue}`}
              subheader={`Creada hace: ... minutos`}
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
                  inputValue.length <= 0 && touched
                    ? 'Debe ingresar un valor'
                    : 'Escribe aquí la descripción de la entrada'
                }
                error={inputValue.length <= 0 && touched}
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
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <IconButton
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

export default EntryPage;
