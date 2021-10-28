import { useHistory } from "react-router";

export default function Shuffle({ randomize }) {
   const history = useHistory();
   const dispatch = () => {
      history.push("/pokedex/random-pokemons");
      randomize();
   };
   return (
      <div
         className="w-full h-10 rounded-md cursor-pointer flex justify-center items-center bg-blue hover:bg-blue-dark"
         onClick={dispatch}
      >
         <i className="fas fa-random mr-2 text-lg"></i>
         <span>Surprise Me!</span>
      </div>
   );
}
