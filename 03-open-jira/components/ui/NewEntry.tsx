import { AddCircleOutlined, SaveOutlined } from '@mui/icons-material';
import { Box, Button, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';

const NewEntry = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [touched, setTouched] = useState(false);

  const onTextFieldChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(() => e.target.value);
    setTouched(true);
  };

  const onSave = () => {
    if (inputValue.length === 0) return;
    console.log(inputValue);
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      {isAdding ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 2 }}
            autoFocus
            multiline
            placeholder="Agregar una nueva entrada"
            label="Descripción"
            helperText={
              inputValue.length <= 0 && touched
                ? 'Debe ingresar un valor'
                : 'Escribe aquí la descripción de la entrada'
            }
            error={inputValue.length <= 0 && touched}
            value={inputValue}
            onChange={(e) => onTextFieldChange(e)}
            onBlur={() => setTouched(true)}
          />
          <Box display="flex" justifyContent="space-between">
            <Button variant="outlined" onClick={() => setIsAdding(false)}>
              Cancelar
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveOutlined />}
              onClick={onSave}
            >
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddCircleOutlined />}
          fullWidth
          variant="outlined"
          onClick={() => setIsAdding(true)}
        >
          Agregar tarea
        </Button>
      )}
    </Box>
  );
};
export default NewEntry;
