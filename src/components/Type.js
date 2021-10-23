export default function Type({ data }) {
   return (
      <section className="border-4 border-gray-light rounded-md p-4 mt-3 md:mt-0">
         <h2 className="text-xl mb-2">Type</h2>
         <div className="grid grid-cols-2 gap-2 text-white">
            {data?.types?.map((type) => (
               <div
                  key={type.slot}
                  className={`rounded-md capitalize py-1 text-center bg-${type.type.name}`}
               >
                  {type.type.name}
               </div>
            ))}
         </div>
      </section>
   );
}
