import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useState } from "react";
import { Layout } from "../../components/layouts";
import { PokemonResponse } from "../../interfaces";
import { localFavorites } from "../../utils";
import { pokeApi } from "../api";

interface Props {
  pokemon: PokemonResponse;
}
const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(
    typeof window !== "undefined" &&
      localFavorites.existsInFavorites(pokemon.id)
  );

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);
  };
  // console.log(typeof window);

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ paddding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "no-image.png"
                }
                alt={pokemon.name}
                width="100%"
                height="200px"
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card hoverable css={{ paddding: "30px" }}>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button
                color="gradient"
                ghost={!isInFavorites}
                onClick={onToggleFavorite}
              >
                {isInFavorites ? "En Favoritos" : "Guardar en Favoritos"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction="row" display="flex">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
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
