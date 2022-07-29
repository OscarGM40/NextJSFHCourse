import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { ShopLayout } from '../../components/layouts';
import { GetServerSideProps } from 'next';
import { jwt } from '../../utils';

const AddressPage = () => {
  const { t } = useTranslation('home');

  return (
    <ShopLayout title="Address" pageDescription="confirm shipping address">
      <Typography variant="h1" component="h1">
        {t('adressPageTitle')}
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6}>
          <TextField label={t('adressPageName')} variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label={t('adressPageSurname')}
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label={t('adressPageAddress01')}
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label={t('adressPageAddress02')}
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label={t('adressPagePostalCode')}
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label={t('adressPageCity')} variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <Select variant="filled" label={t('adressPageCountry')} value={1}>
              <MenuItem value={1}>Argentina</MenuItem>
              <MenuItem value={2}>Honduras</MenuItem>
              <MenuItem value={3}>El Salvador</MenuItem>
              <MenuItem value={4}>México</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label={t('adressPagePhone')} variant="filled" fullWidth />
        </Grid>
      </Grid>
      <Box sx={{ mt: 5 }} display="flex" justifyContent="center">
        <Button color="secondary" className="circular-btn" size="large">
          {t('adressPageCheckButton')}
        </Button>
      </Box>
    </ShopLayout>
  );
};
/* forma anterior a Next12 sin middlewares */
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { token = '' } = ctx.req.cookies;
  let isValidToken = false;

  try {
    await jwt.isValidToken(token);
    isValidToken = true;
  } catch (error) {
    isValidToken = false;
  }

  if (!isValidToken) {
    return {
      redirect: {
        destination: '/auth/login?p=/checkout/address',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default AddressPage;
