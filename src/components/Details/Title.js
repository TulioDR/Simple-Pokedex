import { useState, useEffect } from "react";

export default function Title({ data, species }) {
   const isPokemonSpecial = (baby, legendary, mythical) => {
      if (baby) return "Baby";
      if (legendary) return "Legendary";
      if (mythical) return "Mythical";
      else return false;
   };
   const getPokemonNumber = (id) => {
      return id.toLocaleString("en-US", {
         minimumIntegerDigits: 3,
      });
   };

   const [isSpecial, setIsSpecial] = useState();
   useEffect(() => {
      const data = isPokemonSpecial(
         species.is_baby,
         species.is_legendary,
         species.is_mythical
      );
      setIsSpecial(data);
   }, [species.is_baby, species.is_legendary, species.is_mythical]);

   return (
      <section className="mb-6 text-center flex flex-col items-center">
         <div className="text-5xl font-semibold capitalize">
            <span>{data.name}</span>
            <span className="ml-2 text-gray-light">
               #{getPokemonNumber(data.id)}
            </span>
         </div>
         {isSpecial && (
            <h1 className={`mt-1 w-max border-b-4 border-${isSpecial}`}>
               {isSpecial} Pokemon
            </h1>
         )}
      </section>
   );
}
