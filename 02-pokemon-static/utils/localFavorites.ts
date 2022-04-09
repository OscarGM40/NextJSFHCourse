
const toggleFavorite = (id: number) => {

  const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
  
  const isFavorited = favorites.includes(id);

  if (isFavorited) {
    const newFavorites = favorites.filter(pokeId => pokeId !== id);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  } else {
    localStorage.setItem('favorites', JSON.stringify([...favorites, id]));
  }
}

const existsInFavorites = (id: number): boolean => {
  if(typeof window === 'undefined') return false;
  const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
  return favorites.includes(id);
}

const pokemons = ():number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
}
export default {
  toggleFavorite,
  existsInFavorites,
  pokemons
}