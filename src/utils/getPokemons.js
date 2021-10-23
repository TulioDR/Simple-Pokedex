const getPokemonData = async (url) => {
   const res = await fetch(url);
   const data = await res.json();
   return data;
};
export const getPokemons = async (array, count) => {
   const pokemonsArray = array.slice(count, count + 20);
   for (const pokemon of pokemonsArray) {
      pokemon.data = await getPokemonData(pokemon.url);
      pokemon.image = pokemon.data.sprites.front_default;
   }
   return pokemonsArray;
};

export const orderPokemonsAZ = (array) => {
   array.sort(function (a, b) {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
   });
   return array;
};

export const filterPokemons = (allPokemons, value) => {
   return allPokemons.filter((pokemon) => {
      return pokemon.name.includes(value.toLowerCase());
   });
};
