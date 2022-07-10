import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import type { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import { ShopLayout } from '../components/layouts';
import { ProductList } from '../components/products';
import { initialData } from '../database/products';

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
      <ProductList products={initialData.products as any} />
    </ShopLayout>
  );
};

export default Home;
