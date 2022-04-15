import { NextPage, GetStaticProps } from "next";
import { Grid } from "@nextui-org/react";
import { Layout } from "../components/layouts";
import { pokeApi } from "./api";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import { PokemonCard } from "../components/pokemon";

interface Props {
  pokemons: SmallPokemon[];
}
const HomePage: NextPage<Props> = ({ pokemons }) => {
  /* fijate que un componente <Row> está dividido en 12 columnas.En PrimeNg será igual */
  return (
    <Layout title="Listado de pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};
/* recuerda que estas funciones sólo se pueden ejecutar en pages y que se ejecutan en el lado del servidor */
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => {
    // console.log(pokemon.url.split("/")[6]);
    /* index + 1 será más rápido */
    return {
      id: index + 1,
      name: pokemon.name,
      url: pokemon.url,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        index + 1
      }.svg`,
    };
  });

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
