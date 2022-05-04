import { PokemonResponse } from "../interfaces"
import { pokeApi } from "../pages/api"

export const getPokemonInfo = async (nameOrId: string) => {
  try {
    const { data } = await pokeApi.get<PokemonResponse>(`pokemon/${nameOrId}`)

    return {
      name: data.name,
      id: data.id,
      sprites: data.sprites
    }

  } catch (error) {
    return null;
  }

}