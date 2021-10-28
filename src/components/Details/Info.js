import { useEffect, useState } from "react";

export default function Info({ data, species }) {
   const [open, setOpen] = useState(false);
   const [ability, setAbility] = useState({});
   const [abilities, setAbilities] = useState([]);

   const toggle = () => setOpen(!open);

   const setAbilityInfo = (ability) => {
      setAbility({ name: ability.name, info: ability.info });
      toggle();
   };

   const getData = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
   };

   useEffect(() => {
      const getEverything = async () => {
         const getAbilities = async (array) => {
            for (const item of array) {
               const data = await getData(item.ability.url);
               item.ability.info = data.flavor_text_entries.filter(
                  (pok) => pok.language.name === "en"
               )[0].flavor_text;
            }
            return array;
         };
         const info = await getAbilities(data.abilities);
         setAbilities(info);
      };
      getEverything();
   }, [data.abilities]);
   const getGender = (number) => {
      if (number < 0) return "Unknown";
      if (number === 0) return "Male only";
      if (1 <= number && number <= 7) return "Male and Female";
      if (number === 8) return "Female only";
   };

   return (
      <div className="bg-blue-500 p-3 rounded-md grid grid-cols-2 gap-y-1 relative overflow-hidden mt-3 md:mt-0">
         <div>
            <div className="text-white">Height</div>
            <div>{`${data.height / 10} m`}</div>
         </div>
         <div>
            <div className="text-white">Weight</div>
            <div>{`${data.weight / 10} Kg`}</div>
         </div>
         <div>
            <div className="text-white">Specie's gender</div>
            <div>{getGender(species.gender_rate)}</div>
         </div>
         <div className="row-span-2">
            <div className="text-white">Abilities</div>
            {abilities.map((ability) => (
               <div key={ability.ability.name} className="capitalize">
                  <span className="mr-2">{ability.ability.name}</span>
                  <i
                     className="fas fa-info-circle text-white cursor-pointer"
                     onClick={() => setAbilityInfo(ability.ability)}
                  ></i>
               </div>
            ))}
         </div>
         <div>
            <div className="text-white">Generation</div>
            <div className="font-black">
               {species.generation.name.substring(11).toUpperCase()}
            </div>
         </div>
         {open && (
            <div className="absolute w-full h-full bg-gray-dark py-3 px-5">
               <div className="text-gray-light mb-2 text-sm">Ability Info</div>
               <div className="text-white text-xl capitalize">
                  {ability.name}
               </div>
               <div className="text-white">{ability.info}</div>
               <div
                  onClick={toggle}
                  className="cursor-pointer absolute top-0 right-0 bg-black p-3 text-white rounded-bl-md"
               >
                  <i className="fas fa-times"></i>
                  <span className="ml-1">Close</span>
               </div>
            </div>
         )}
      </div>
   );
}
