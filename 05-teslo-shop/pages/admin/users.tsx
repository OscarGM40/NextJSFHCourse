import { PeopleOutline } from '@mui/icons-material';
import { AdminLayout } from '../../components/layouts';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Grid } from '@mui/material';
import useSWR from 'swr';
import { IUser } from '../../interfaces';
import useTranslation from 'next-translate/useTranslation';

const UsersPage = () => {
  const { t } = useTranslation('home');

  // siempre hay que definir los headers y las columnas,y planchar este array con valores que hagan match con lo que defina(Array<{email,name,role}>)
  const columns: GridColDef[] = [
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'name', headerName: t('historyPageFullName'), width: 300 },
    { field: 'role', headerName: 'Role', width: 300 },
  ];
  const { data, error } = useSWR<IUser[]>('/api/admin/users');

  if (!data && !error) return <></>;

  // aunque no vaya a mostrar la columna ID,cada fila necesita un id único
  const newRows: { email: string; name: string; role: string }[] = data!.map(
    (user) => ({
      id: user._id,
      email: user.email,
      name: user.name,
      role: user.role,
    })
  );

  return (
    <AdminLayout
      title="Users"
      subtitle="Users management"
      icon={<PeopleOutline />}
    >
      <Grid container className="fadeIn">
        <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
          <DataGrid
            rows={newRows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10, 20, 50, 100]}
          />
        </Grid>
      </Grid>
    </AdminLayout>
  );
};
export default UsersPage;
