import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import NextLink from 'next/link';
import setLanguage from 'next-translate/setLanguage';

export const Navbar = () => {
  const { t } = useTranslation('home');
  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref>
          <Link display="flex" alignItems="center">
            <Typography variant="h6">Teslo |</Typography>
            <Typography variant="h6" fontWeight={200} sx={{ ml: 0.5 }}>Shop</Typography>
          </Link>
        </NextLink>
        <Button
          sx={{ ml: 3 }}
          variant="outlined"
          color="secondary"
          onClick={async () => await setLanguage('en')}
        >
          ENG
        </Button>
        <Button
          sx={{ ml: 1 }}
          variant="outlined"
          color="error"
          onClick={async () => await setLanguage('es')}
        >
          ESP
        </Button>
        <Box flex={1} />
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <NextLink href="/category/men" passHref>
            <Link>
              <Button> {t('navbarMen')}</Button>
            </Link>
          </NextLink>

          <NextLink href="/category/women" passHref>
            <Link>
              <Button>{t('navbarWomen')}</Button>
            </Link>
          </NextLink>

          <NextLink href="/category/kids" passHref>
            <Link>
              <Button>{t('navbarKids')}</Button>
            </Link>
          </NextLink>
        </Box>

        <Box flex={1} />

        <IconButton>
          <SearchOutlined />
        </IconButton>
        <NextLink href="/cart" passHref>
          <Link>
            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>
        <Button>Menu</Button>
      </Toolbar>
    </AppBar>
  );
};
