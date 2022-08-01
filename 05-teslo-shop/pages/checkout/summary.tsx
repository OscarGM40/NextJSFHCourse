import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { CartList, OrderSummary } from '../../components/cart';
import { ShopLayout } from '../../components/layouts';
import NextLink from 'next/link';
import { CartContext } from '../../context';
import { useContext } from 'react';
import { COUNTRIES } from '../../utils';

const SummaryPage = () => {

  const { t } = useTranslation('home');
  const { shippingAddress,numberOfItems } = useContext(CartContext);
  
  if(!shippingAddress){return <></>}
  
  return (
    <ShopLayout title="Order Summary" pageDescription="Order Summary">
      <Typography variant="h1" component="h1">
        {t('summaryPageTitle')}
      </Typography>
      <Grid container sx={{ mt: 2 }}>
        <Grid item xs={12} sm={7}>
          <CartList editable />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">
                {t('summaryPageOrder', { count: numberOfItems })}
              </Typography>
              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">
                  Dirección de entrega
                </Typography>
                <NextLink href="/checkout/address" passHref>
                  <Link underline="always">Editar</Link>
                </NextLink>
              </Box>

              <Typography>{`${shippingAddress?.firstName} ${shippingAddress?.lastName}}`}</Typography>
              <Typography>{shippingAddress?.city} {shippingAddress?.zip}</Typography>
              <Typography>{shippingAddress?.address}</Typography>
              <Typography>{COUNTRIES.find(c => c.code === shippingAddress?.country)?.name}</Typography>
              <Typography>{shippingAddress?.phone}</Typography>

              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="end">
                <NextLink href="/cart" passHref>
                  <Link underline="always">Editar</Link>
                </NextLink>
              </Box>

              <OrderSummary />

              <Box sx={{ mt: 3 }}>
                <Button color="secondary" className="circular-btn" fullWidth>
                  Confirm Order
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};
export default SummaryPage;
