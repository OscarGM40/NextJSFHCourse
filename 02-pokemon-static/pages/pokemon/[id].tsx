import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "../../components/layouts";
import { PokemonResponse } from "../../interfaces";
import { pokeApi } from "../api";

interface Props {
  pokemon: PokemonResponse;
}
const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const router = useRouter();
  
  console.log(pokemon);

  return <Layout title="PokemonPage">Temporal mokete</Layout>;
};
/* getStaticPaths no funciona sin getStaticProps */
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151).keys()].map((x) => String(x + 1));

  return {
    paths: pokemons151.map((id) => ({ params: { id } })),
    fallback: false, //ojo que blocking deja pasar,al contrario de lo que pueda parecer,false si bloqueará cualquiera acceso que no esté definido en los paramas
  };
};

/* getStaticProps recibirá los paths de getStaticPaths en ctx. */
export const getStaticProps: GetStaticProps = async (ctx) => {
  /* al loro con esto,asinto, castea desde la propiedad padre */
  const { id } = ctx.params as { id: string };

  const { data } = await pokeApi.get<PokemonResponse>(`/pokemon/${id}`);
  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;
