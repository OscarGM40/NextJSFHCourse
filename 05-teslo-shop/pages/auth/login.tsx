import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { AuthLayout } from '../../components/layouts';
import NextLink from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormModel = {
  email: string;
  password: string;
};
const LoginPage = () => {
  const { t } = useTranslation('home');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormModel>();

  const onLoginUser: SubmitHandler<FormModel> = (data) => {
    console.log(data);
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit(onLoginUser)}>
        <Box sx={{ width: '350px', padding: '10px 20px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h1" component="h1">
                {t('loginPageTitle')}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="filled"
                fullWidth
                {...register('email')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                variant="filled"
                fullWidth
                {...register('password')}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                color="secondary"
                className="circular-btn"
                size="large"
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="end">
              <NextLink href="/auth/register" passHref>
                <Link underline="always"> {t('loginPageRedirect')}</Link>
              </NextLink>
            </Grid>
          </Grid>
        </Box>
      </form>
    </AuthLayout>
  );
};
export default LoginPage;
