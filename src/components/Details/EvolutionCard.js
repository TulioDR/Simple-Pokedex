import { Link } from "react-router-dom";

export default function EvolutionCard({ card }) {
   const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
   const getPokemonNumber = (id) => {
      return id.toLocaleString("en-US", {
         minimumIntegerDigits: 3,
      });
   };
   return (
      <Link to={`/pokemon/${card.id}`}>
         <div
            onClick={scrollTop}
            className="w-40 mx-auto duration-200 cursor-pointer transform hover:-translate-y-1"
         >
            <img
               src={card.sprites.other["official-artwork"].front_default}
               className="w-full bg-gray-light p-3 block rounded-full border-white border-4 shadow-2xl"
               alt={card.name}
            />
            <div className="p-2">
               <div className="text-center mb-2">
                  <span className="capitalize text-white mr-2">
                     {card.name}
                  </span>
                  <span className="text-sm mb-1 text-gray-400">
                     #{getPokemonNumber(card.id)}
                  </span>
               </div>
               <div className="grid grid-cols-2 gap-2 text-white">
                  {card.types.map((type) => (
                     <div
                        key={type.slot}
                        className={`rounded-md capitalize text-center bg-${type.type.name}`}
                     >
                        {type.type.name}
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </Link>
   );
}
