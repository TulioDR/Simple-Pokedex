export default function CardsGrid({ children }) {
   return (
      <section className="cards-grid grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
         {children}
      </section>
   );
}
