export default function Description({ species }) {
   return (
      <div>
         <h2 className="text-3xl">Description</h2>
         <p className="text-lg my-1">
            {
               species.flavor_text_entries.filter(
                  (pok) => pok.language.name === "en"
               )[1].flavor_text
            }
         </p>
      </div>
   );
}
