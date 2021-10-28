export default function LoadMore({ loadMore, showBtn }) {
   return (
      showBtn && (
         <button
            className="block p-4 mt-10 bg-blue hover:bg-blue-dark cursor-pointer text-white mx-auto rounded-md"
            onClick={loadMore}
         >
            Load More Pokemons
         </button>
      )
   );
}
