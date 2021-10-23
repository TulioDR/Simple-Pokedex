import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useReducer } from "react";
import { getPokemons } from "../utils/getPokemons";
import selectReducer from "../reducers/selectReducer";

const initialState = {
   count: 0,
   ordered: [],
   sourceArray: [],
};

export default function usePokemons() {
   const [state, dispatch] = useReducer(selectReducer, initialState);
   const { count, ordered, sourceArray } = state;
   const { searchQuery } = useParams();

   const [allPokemons, setAllPokemons] = useState([]);
   const [displayedPokemons, setDisplayedPokemons] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [isLoadingMore, setIsLoadingMore] = useState(false);
   const [showBtn, setShowBtn] = useState(true);

   const randomize = () => dispatch({ type: "RANDOM", allPokemons });
   const loadMore = () => dispatch({ type: "LOAD_MORE", data: count });

   useEffect(() => {
      document.title = "Pokedex";
      const getAllPokemons = async () => {
         const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=898");
         const data = await res.json();
         const allPokemons = data.results;
         setAllPokemons(allPokemons);
      };
      getAllPokemons();
   }, []);

   useEffect(() => {
      if (searchQuery === "allpokemons") dispatch({ type: "ALL", allPokemons });
      else dispatch({ type: "SEARCH", data: { allPokemons, searchQuery } });
   }, [searchQuery, allPokemons]);

   useEffect(() => {
      const displayPokemons = async (array, count) => {
         if (count === 0) setIsLoading(true);
         else setIsLoadingMore(true);

         const data = await getPokemons(array, count);
         if (count === 0) {
            setDisplayedPokemons(data);
            setIsLoading(false);
         } else {
            setDisplayedPokemons((oldArray) => oldArray.concat(data));
            setIsLoadingMore(false);
         }

         if (count + 20 >= array.length) setShowBtn(false);
         else setShowBtn(true);
      };
      displayPokemons(sourceArray, count);
   }, [sourceArray, count]);

   return [
      allPokemons,
      displayedPokemons,
      showBtn,
      isLoading,
      isLoadingMore,
      dispatch,
      ordered,
      randomize,
      loadMore,
   ];
}
