import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { CartList, OrderSummary } from '../../components/cart';
import { ShopLayout } from '../../components/layouts';
import NextLink from 'next/link';
import {
  CreditCardOffOutlined,
  CreditScoreOutlined,
} from '@mui/icons-material';

const OrderPage = () => {
  const { t } = useTranslation('home');
  return (
    <ShopLayout title="Order Page" pageDescription="Order Page">
      <Typography variant="h1" component="h1">
        Order: sdjkfkl15453
      </Typography>
      {/* <Chip sx={{my:2}} label="Pendiente de pago" variant="outlined" color="error" icon={<CreditCardOffOutlined />}/> */}
      <Chip
        sx={{ my: 2 }}
        label="Orden Pagada"
        variant="outlined"
        color="success"
        icon={<CreditScoreOutlined />}
      />
      <Grid container sx={{ mt: 2 }}>
        <Grid item xs={12} sm={7}>
          <CartList editable />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">
                {t('summaryPageOrder', { count: 3 })}
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

              <Typography>Fernando Herrera</Typography>
              <Typography>323 Algun lugar</Typography>
              <Typography>Stittsville, HYA 23S</Typography>
              <Typography>Canada</Typography>
              <Typography>+1 234781554</Typography>

              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="end">
                <NextLink href="/cart" passHref>
                  <Link underline="always">Editar</Link>
                </NextLink>
              </Box>

              <OrderSummary />

              <Box sx={{ mt: 3 }}>
                <Button color="secondary" className="circular-btn" fullWidth>
                  {/* TODO */}
                  <h1>Pagar</h1>
                  <Chip
                    sx={{ my: 2 }}
                    label="Orden Pagada"
                    variant="outlined"
                    color="success"
                    icon={<CreditScoreOutlined />}
                  />
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};
export default OrderPage;
