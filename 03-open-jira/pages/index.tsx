import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import { Layout } from "../components/layouts";
import { EntryList } from "../components/ui";

const Home: NextPage = () => {
  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            {/* cardheader es self-closed */}
            <CardHeader title="Pendientes" />
            <CardContent>
              {/* agregar una nueva entrada */}
              {/* listado de las entradas */}
              <EntryList />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="En Progreso" />
            <CardContent>
              <EntryList />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Completadas" />
            <CardContent>
              <EntryList />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
