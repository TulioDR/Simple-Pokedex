import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function usePokemonInfo() {
   const { pokemonName } = useParams();
   const [isLoading, setIsLoading] = useState(true);
   const [pokemonDetails, setPokemonDetails] = useState({});

   const getData = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
   };

   useEffect(() => {
      const getPokemonData = async () => {
         const mainUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;
         const mainData = await getData(mainUrl);
         const species = await getData(mainData.species.url);
         const evolution = await getData(species.evolution_chain.url);

         document.title = `${mainData.name} | Pokedex`;
         setPokemonDetails({ mainData, species, evolution });
         setIsLoading(false);
      };
      getPokemonData();
   }, [pokemonName]);

   return [pokemonDetails, isLoading];
}
