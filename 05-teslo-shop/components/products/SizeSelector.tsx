import { Box, Button } from '@mui/material';
import { FC } from 'react';
import { ValidSize } from '../../database/products';

interface Props {
  selectedSize?: ValidSize;
  sizes: ValidSize[];
}
export const SizeSelector: FC<Props> = ({ selectedSize, sizes }) => {
  return (
    <Box>
      {sizes.map((size) => (
        <Button
          key={size}
          size="small"
          color={size === selectedSize ? 'primary' : 'info'}
        >
          {size}
        </Button>
      ))}
    </Box>
  );
};
