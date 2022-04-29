import { Card, CardHeader, Grid } from '@mui/material';
import type { NextPage } from 'next';
import { Layout } from '../components/layouts';
import { EntryList, NewEntry } from '../components/ui';

const Home: NextPage = () => {
  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            {/* cardheader es self-closed */}
            <CardHeader title="Pendientes" />
            <NewEntry />
            {/* agregar una nueva entrada */}
            {/* listado de las entradas */}
            <EntryList status="pending" color="#990a0a" />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="En Progreso" />
            <EntryList status="in-progress" color="#0a0a98c3" />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Completadas" />
            <EntryList status="finished" color="#19b519" />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
