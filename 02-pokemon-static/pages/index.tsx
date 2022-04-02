import { NextPage, GetStaticProps } from "next";
import { Button } from "@nextui-org/react";
import { Layout } from "../components/layouts";
import { pokeApi } from "./api";
import { PokemonListResponse } from "../interfaces";

const HomePage: NextPage = () => {
  return (
    <Layout title="Listado de pokemons">
      <Button color="gradient">Click me</Button>
    </Layout>
  );
};
/* recuerda que estas funciones sólo se pueden ejecutar en pages y que se ejecutan en el lado del servidor */
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  /* si ahora hiciera un console.log lo veo en el server solo */
// console.log(data);
  return {
    props: {
      pokemons: data.results,
    },
  };
};

export default HomePage;
