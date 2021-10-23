import { filterPokemons, orderPokemonsAZ } from "../utils/getPokemons";

export default function selectReducer(state, action) {
   switch (action.type) {
      case "ALL":
         return {
            ...state,
            sourceArray: action.allPokemons,
            ordered: action.allPokemons,
            count: 0,
         };
      case "RANDOM":
         const random = [...action.allPokemons].sort(() => Math.random() - 0.5);
         return {
            ...state,
            sourceArray: random,
            ordered: action.allPokemons,
            count: 0,
         };
      case "SEARCH":
         const { allPokemons, searchQuery } = action.data;
         const founded = filterPokemons(allPokemons, searchQuery);
         return { ...state, sourceArray: founded, ordered: founded, count: 0 };
      case "FIRST-LAST":
         const ordered = [...action.data];
         return { ...state, sourceArray: ordered, count: 0 };
      case "LAST-FIRST":
         const reversed = [...action.data].reverse();
         return { ...state, sourceArray: reversed, count: 0 };
      case "A-Z":
         const AZ = orderPokemonsAZ([...action.data]);
         return { ...state, sourceArray: AZ, count: 0 };
      case "Z-A":
         const ZA = orderPokemonsAZ([...action.data]).reverse();
         return { ...state, sourceArray: ZA, count: 0 };
      case "LOAD_MORE":
         return { ...state, count: action.data + 20 };
      default:
         return state;
   }
}
