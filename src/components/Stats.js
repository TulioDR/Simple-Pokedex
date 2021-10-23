import { Fragment } from "react";

export default function Stats({ data }) {
   const getStats = (stat) => {
      const x = ((stat * 100) / 255).toFixed(2);
      return {
         background: `linear-gradient(to right, #30a7d7 ${x}%, white 0)`,
      };
   };

   return (
      <section className="bg-gray-light rounded-md p-3">
         <h1 className="text-white text-xl ml-2">Stats</h1>
         <div className="grid grid-cols-5 gap-2">
            {data.stats?.map((stat, index) => (
               <Fragment key={index}>
                  <div className="text-xs h-9 text-white flex text-center justify-center items-center">
                     {stat.stat.name}
                  </div>
                  <div
                     className="border-4 border-white rounded-full h-9 col-span-4 duration-200"
                     style={getStats(stat.base_stat)}
                  ></div>
               </Fragment>
            ))}
         </div>
      </section>
   );
}
