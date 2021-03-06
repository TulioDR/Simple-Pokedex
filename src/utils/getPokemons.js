export const getData = async (url) => {
   const res = await fetch(url);
   return await res.json();
};

export const getPokemons = async (array, count) => {
   const pokemonsArray = array.slice(count, count + 20);
   const requestPromises = pokemonsArray.map((pokemon) => getData(pokemon.url));
   return Promise.all(requestPromises);
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
