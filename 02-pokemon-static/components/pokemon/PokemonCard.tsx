import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { SmallPokemon } from "../../interfaces";

interface Props {
  pokemon: SmallPokemon;
}
export const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  const router = useRouter();
  return (
    <Grid xs={6} sm={3} md={2} key={pokemon.id} xl={1}>
      <Card
        cover
        hoverable
        clickable
        animated
        onClick={() => router.push(`/name/${pokemon.name}`)}
      >
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            showSkeleton
            src={pokemon.img}
            alt={pokemon.name}
            width="100%"
            height={230}
          />
        </Card.Body>
        <Card.Footer
          blur
          css={{
            position: "absolute",
            bgBlur: "#0f1114",
            borderTop: "$borderWeights$light solid $gray700",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row justify="space-between">
            <Text transform="capitalize">{pokemon.name}</Text>
            <Text>#{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
