import { useEffect, useState } from "react";
import { getData } from "../../utils/getPokemons";

import EvolutionCard from "./EvolutionCard";
const myStyle = {
   width: 0,
   height: 0,
   borderTop: "15px solid transparent",
   borderLeft: "30px solid white",
   borderBottom: "15px solid transparent",
};

export default function Evolution({ evolution }) {
   const [evolutionChain, setEvolutionChain] = useState([]);

   const getID = (str) => str.substring(42).slice(0, -1);

   useEffect(() => {
      const getEvolutionChain = async (data) => {
         let array = [];
         const names = [getID(data.species.url)];
         if (data.evolves_to[0]) {
            names.push(getID(data.evolves_to[0].species.url));
            if (data.evolves_to[0].evolves_to[0]) {
               names.push(getID(data.evolves_to[0].evolves_to[0].species.url));
            }
         }
         for (const id of names) {
            const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
            const data = await getData(url);
            array.push(data);
         }
         return array;
      };
      const getEverything = async () => {
         const info = await getEvolutionChain(evolution.chain);
         setEvolutionChain(info);
      };
      getEverything();
   }, [evolution]);

   return (
      <section className="bg-gray-light m-auto mt-6 rounded-md p-4">
         <div className="text-white text-2xl">Evolution Chain</div>
         {evolutionChain.length <= 1 ? (
            <div className="text-white">This Pokemon doesn't evolve</div>
         ) : (
            <div className="absolute md:static h-4/5 flex flex-col md:flex-row items-center mt-9 md:mt-0">
               <div className="w-4 md:w-full h-full md:h-4 bg-white"></div>
               <div
                  style={myStyle}
                  className="transform rotate-90 md:rotate-0"
               ></div>
            </div>
         )}
         <div className="grid md:grid-flow-col auto-cols-fr gap-4	mt-5">
            {evolutionChain.map((card) => (
               <EvolutionCard key={card.id} card={card} />
            ))}
         </div>
      </section>
   );
}
