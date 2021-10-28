import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { filterPokemons } from "../../utils/getPokemons";

export default function NavForm({ allPokemons }) {
   const [open, setOpen] = useState(false);
   const [inputValue, setInputValue] = useState("");
   const [foundedPokemons, setFoundedPokemons] = useState([]);

   const history = useHistory();
   const foundedDiv = useRef(null);

   const handleInput = (e) => {
      const value = e.target.value;
      setInputValue(value);
      const founded = filterPokemons(allPokemons, value);
      setFoundedPokemons(founded);
      if (value) setOpen(true);
      else setOpen(false);
   };

   const fillInput = (e) => {
      const value = e.target.innerText;
      setInputValue(value);
      const founded = filterPokemons(allPokemons, value);
      setFoundedPokemons(founded);
      history.push(`/pokedex/${value}`);
      setOpen(false);
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      history.push(`/pokedex/${inputValue}`);
      setOpen(false);
   };

   const handleFocus = () => {
      if (inputValue) setOpen(true);
   };
   const handleBlur = (e) => {
      if (e.relatedTarget !== foundedDiv.current) setOpen(false);
   };

   return (
      <div className="w-full sm:w-2/3 md:w-1/2 relative sm:h-full flex items-center">
         <form
            className="w-full h-10 flex items-center"
            onSubmit={handleSubmit}
         >
            <input
               className="pl-3 h-full text-base flex-1 mr-3 rounded-md outline-none"
               type="text"
               spellCheck="false"
               autoComplete="off"
               placeholder="Search Pokemons by name"
               onChange={handleInput}
               onFocus={handleFocus}
               onBlur={handleBlur}
               value={inputValue}
            />
            <button
               className="w-11 h-10 text-white rounded-md text-xl bg-orange hover:bg-orange-dark"
               type="submit"
            >
               <i className="fas fa-search"></i>
            </button>
         </form>
         {open && (
            <div
               ref={foundedDiv}
               tabIndex={0}
               className="absolute bg-white w-full max-h-96 overflow-y-auto top-14 right-0 border-l-2 border-b-2 border-gray-900"
            >
               {foundedPokemons.length ? (
                  foundedPokemons.map((pokemon) => (
                     <div
                        key={pokemon.name}
                        className="h-9 pl-3 capitalize cursor-pointer flex items-center hover:bg-gray-300"
                        onClick={fillInput}
                     >
                        {pokemon.name}
                     </div>
                  ))
               ) : (
                  <div className="h-9 pl-3 flex items-center text-gray-600 cursor-default">
                     Nothing Founded
                  </div>
               )}
            </div>
         )}
      </div>
   );
}
