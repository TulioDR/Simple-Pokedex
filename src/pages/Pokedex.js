// Containers
import Body from "../containers/Body";
import Main from "../containers/Main";

// Components
import Navbar from "../components/Navbar";
import Select from "../components/Cards/Select";
import Card from "../components/Cards/Card";
import Loading from "../components/Loading";

// Hooks
import usePokemons from "../hooks/usePokemons";

import Shuffle from "../components/Cards/Shuffle";
import LoadMore from "../components/Cards/LoadMore";

export default function Pokedex() {
   const [
      allPokemons,
      displayedPokemons,
      selected,
      showBtn,
      isLoading,
      isLoadingMore,
      randomize,
      loadMore,
   ] = usePokemons();

   return (
      <Body>
         <Navbar showForm={true} {...{ allPokemons }} />
         <Main>
            <div className="grid sm:grid-cols-2 gap-2 md:gap-24 mb-5 text-white">
               <Shuffle {...{ randomize }} />
               <Select {...{ selected }} />
            </div>
            {isLoading ? (
               <Loading />
            ) : (
               <>
                  {displayedPokemons.length ? (
                     <section className="cards-grid grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                        {displayedPokemons.map((pokemon) => (
                           <Card key={pokemon.id} pokemon={pokemon} />
                        ))}
                     </section>
                  ) : (
                     <div className="w-full text-2xl text-center mt-10">
                        No Pokemons were founded
                     </div>
                  )}

                  {isLoadingMore ? (
                     <Loading />
                  ) : (
                     <LoadMore {...{ loadMore, showBtn }} />
                  )}
               </>
            )}
         </Main>
      </Body>
   );
}
