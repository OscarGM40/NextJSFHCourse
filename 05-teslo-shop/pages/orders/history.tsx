import { Button, Chip, Grid, Link, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { ShopLayout } from '../../components/layouts';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import NextLink from 'next/link';

const rows = [
  { id: 1, paid: true, fullname: 'Fernando Herrera' },
  { id: 2, paid: false, fullname: 'Melissa Flores' },
  { id: 3, paid: true, fullname: 'Hernando Vallejo' },
  { id: 4, paid: false, fullname: 'Emin Reyes' },
  { id: 5, paid: false, fullname: 'Eduardo Rios' },
  { id: 6, paid: true, fullname: 'Natalia Herrera' },
];

const HistoryPage = () => {
  const { t } = useTranslation('home');

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullname', headerName: t('historyPageFullName'), width: 300 },
    {
      field: 'paid',
      headerName: t('historyPagePaid'),
      description: t('historyPagePaidDesc'),
      width: 200,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params: GridValueGetterParams) => {
        return params.row.paid ? (
          <Chip
            color="success"
            label={t('historyPagePaid')}
            variant="outlined"
          />
        ) : (
          <Chip
            color="error"
            label={t('historyPageNoPaid')}
            variant="outlined"
          />
        );
      },
    },
    {
      field: 'link',
      headerName: t('historyPageLink'),
      description: t('historyPageLinkDesc'),
      align: 'center',
      headerAlign: 'center',
      sortable:false,
      width: 200,
      renderCell: (params: GridValueGetterParams) => {
        return (
          <NextLink href={`/orders/${params.row.id}`} passHref>
            <Link>
              <Chip
                color="secondary"
                label={t('historyPageLinkButton') + params.row.id}
                variant="outlined"
                sx={{ cursor: 'pointer' }}
              />
            </Link>
          </NextLink>
        );
      },
    },
  ];
  return (
    <ShopLayout
      title={'History or orders'}
      pageDescription={'History or orders'}
    >
      <Typography variant="h1" component="h1">
        {t('historyPageTitle')}
      </Typography>
      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10, 20, 50, 100]}
          />
        </Grid>
      </Grid>
    </ShopLayout>
  );
};
export default HistoryPage;
