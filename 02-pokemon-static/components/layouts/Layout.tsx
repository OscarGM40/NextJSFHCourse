import Head from "next/head";
import { Navbar } from "../ui";

type LayoutProps = {
  children: React.ReactNode | React.ReactNode[];
  title?: String;
};

export const Layout: React.FC<LayoutProps> = ({
  children,
  title,
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title ?? "Pokemon App"}</title>
        <meta name="author" content="Oscar Gonzalez" />
        <meta
          name="description"
          content={`Información sobre el pokémon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "5px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
