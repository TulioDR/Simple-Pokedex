import { Link } from "react-router-dom";

export default function Card({ pokemon }) {
   const scrollTop = () => window.scrollTo({ top: 0 });
   return (
      <Link
         to={`/pokemon/${pokemon.id}`}
         onClick={scrollTop}
         className="rounded-md overflow-hidden duration-200 cursor-pointer transform hover:-translate-y-1"
      >
         <img
            src={pokemon.sprites.front_default}
            className="w-full bg-gray-300 p-3 block"
            alt={pokemon.name}
         />
         <div className="p-2 bg-white">
            <div className="text-sm mb-1 text-gray-400">
               N.º
               {pokemon.id.toLocaleString("en-US", {
                  minimumIntegerDigits: 3,
               })}
            </div>
            <h2 className="capitalize mb-1">{pokemon.name}</h2>
            <div className="grid grid-cols-2 gap-2 text-white">
               {pokemon.types.map((type) => {
                  return (
                     <div
                        key={type.slot}
                        className={`rounded-md capitalize text-center bg-${type.type.name}`}
                     >
                        {type.type.name}
                     </div>
                  );
               })}
            </div>
         </div>
      </Link>
   );
}
