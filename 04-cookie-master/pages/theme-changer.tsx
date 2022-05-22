import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from '@mui/material';
import Cookies from 'js-cookie';
import { GetServerSideProps, NextPage } from 'next';
import { ChangeEvent, useEffect, useState } from 'react';
import { Layout } from '../components/layouts';

interface Props {
  theme: "light" | "dark" | "custom";
}
const ThemeChanger: NextPage<Props> = ({ theme }) => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentTheme(() => event.target.value);
    localStorage.setItem('theme', event.target.value);
    Cookies.set('theme', event.target.value);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setCurrentTheme(() => storedTheme);
    }
  }, [setCurrentTheme]);

/*   useEffect(() => {
    console.log('LocalStorage', localStorage.getItem('theme'));
    console.log('Cookie', Cookies.get('theme'));
  });
 */

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Tema</FormLabel>
            <RadioGroup
              name={currentTheme}
              onChange={onThemeChange}
              defaultValue={currentTheme}
              value={currentTheme}
            >
              <FormControlLabel
                value="light"
                name="light"
                control={<Radio />}
                label="Light"
              />
              <FormControlLabel
                value="dark"
                name="dark"
                control={<Radio />}
                label="Dark"
              />
              <FormControlLabel
                value="custom"
                name="custom"
                control={<Radio />}
                label="Custom"
              />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  /* En Next tengo acceso a toda la request que hace el user en una page */
  // console.log(ctx.req); <- claro que es un objeto demasiado grande

  /* es recomendable acceder a req.cookies */
  // console.log(ctx.req.headers.cookie); | console.log(ctx.req.cookies);

  const { theme = 'light', name = 'No name' } = ctx.req.cookies;
  
  const validThemes = ['light', 'dark', 'custom'];

  return {
    props: {
      theme: validThemes.includes(theme) ? theme : 'light',
      name,
    },
  };
};
export default ThemeChanger;
