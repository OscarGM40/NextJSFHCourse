import { NextPage } from "next";
import { Layout } from "../../components/layouts";
import { FavoritePokemons, NoFavorites } from "../../components/ui";
import { useEffect, useState } from "react";
import { localFavorites } from "../../utils";
import { Grid } from "@nextui-org/react";

interface Props {}

const Favorites: NextPage<Props> = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons);
  }, []);

  return (
    <Layout title="Pokémons - Favoritos">
      { favoritePokemons.length === 0 
      ? ( <NoFavorites />)
      : ( <FavoritePokemons pokemons={favoritePokemons} />) }
    </Layout>
  );
};
export default Favorites;
