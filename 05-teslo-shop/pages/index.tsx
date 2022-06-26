import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import { ShopLayout } from '../components/layouts';

const Home: NextPage = () => {
  const { t } = useTranslation('home');
  return (
    <ShopLayout
      title={'Teslo-Shop - Home'}
      pageDescription={t('pageDescription')}
    >
      <Typography variant="h1">{t('pageTitle')}</Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        {t('pageSubtitle')}
      </Typography>
    </ShopLayout>
  );
};

export default Home;
