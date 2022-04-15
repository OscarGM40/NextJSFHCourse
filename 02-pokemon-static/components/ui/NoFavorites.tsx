import { Container, Image, Text } from "@nextui-org/react";

export const NoFavorites = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 100px)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text h1 css={{ textAlign: "center", marginBottom: "30px" }}>
        No hay favoritos aún.Por favor,seleccione antes algún Pokemon como
        favorito
      </Text>
      <Image
        showSkeleton
        src="https://media.giphy.com/media/3o7btLwXyvQZ9XQq2U/giphy.gif"
      />
    </Container>
  );
};
