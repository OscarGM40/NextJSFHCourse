import { Box } from "@mui/material";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  title?: string;
  children?: JSX.Element | JSX.Element[];
}
const Layout = ({ title='OpenJira',children }: Props) => {
  return (
    /* sx es como el atributo style para estilos inline pero tiene acceso al theme actual */
    <Box sx={{ flexGrow: 1 }} >
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      {/* Sidebar */}
    <Box sx={{padding:'10px 20px'}}>
      {children}
    </Box>
    </Box>
  );
};
export default Layout;
