export default function Groups({ species }) {
   return (
      <section
         className={`bg-eggGroups-${species.color.name}-light border-eggGroups-${species.color.name}-dark border-4 rounded-md mt-3 md:mt-0`}
      >
         <div
            className={`bg-eggGroups-${species.color.name}-dark text-white p-2 pl-4 text-lg`}
         >
            Egg Groups
         </div>
         {species.egg_groups?.length ? (
            <div className="grid grid-cols-2 gap-4 p-4">
               {species.egg_groups.map((group) => (
                  <div
                     key={group.name}
                     className={`text-white text-center rounded-full bg-eggGroups-${species.color.name}-dark py-1 capitalize`}
                  >
                     {group.name}
                  </div>
               ))}
            </div>
         ) : (
            <div
               className={`text-white text-center m-4 px-4 rounded-full bg-eggGroups-${species.color.name}-dark py-1`}
            >
               This pokemon don't belong to any known groups
            </div>
         )}
      </section>
   );
}
