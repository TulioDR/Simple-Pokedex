import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../utils/getPokemons";

const initialState = {
   mainData: null,
   species: null,
   evolution: null,
};

export default function usePokemonDetails() {
   const { pokemonName } = useParams();
   const [isLoading, setIsLoading] = useState(true);
   const [pokemon, setPokemon] = useState(initialState);

   useEffect(() => {
      const getPokemonData = async () => {
         const mainUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;
         const mainData = await getData(mainUrl);
         const species = await getData(mainData.species.url);
         const evolution = await getData(species.evolution_chain.url);

         document.title = `${mainData.name} | Pokedex`;
         setPokemon({ mainData, species, evolution });
         setIsLoading(false);
      };
      getPokemonData();
      return () => {
         setPokemon(initialState);
      };
   }, [pokemonName]);

   return [pokemon, isLoading];
}
