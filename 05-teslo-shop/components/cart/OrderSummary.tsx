import { Grid, Typography } from '@mui/material';

export const OrderSummary = () => {
  return (
    <Grid container={true}>
      {/* ROW */}
      <Grid item={true} xs={6}>
        <Typography>No. Productos</Typography>
      </Grid>
      <Grid item={true} xs={6} display="flex" justifyContent="end">
        <Typography>3 items</Typography>
      </Grid>
      {/* ROW */}
      <Grid item={true} xs={6}>
        <Typography>SubTotal</Typography>
      </Grid>
      <Grid item={true} xs={6} display="flex" justifyContent="end">
        <Typography>{`$${155.36}`}</Typography>
      </Grid>
      {/* ROW */}
      <Grid item={true} xs={6}>
        <Typography>IVA (15%)</Typography>
      </Grid>
      <Grid item={true} xs={6} display="flex" justifyContent="end">
        <Typography>{`$${35.31}`}</Typography>
      </Grid>
      {/* ROW */}
      <Grid item={true} xs={6}>
        <Typography variant="subtitle1">Total:</Typography>
      </Grid>
      <Grid item={true} xs={6} display="flex" justifyContent="end">
        <Typography variant="subtitle1">{`$${165.66}`}</Typography>
      </Grid>
    </Grid>
  );
};
