// Containers
import Body from "../containers/Body";
import Cards from "../containers/Cards";
import Main from "../containers/Main";
import Navbar from "../containers/Navbar";

// Components
import Shuffle from "../components/Shuffle";
import Select from "../components/Select";
import Card from "../components/Card";
import LoadMore from "../components/LoadMore";
import Loading from "../components/Loading";

// Hooks
import usePokemons from "../hooks/usePokemons";
import { useState } from "react";

export default function Pokedex() {
   const [
      allPokemons,
      displayedPokemons,
      showBtn,
      isLoading,
      isLoadingMore,
      dispatch,
      ordered,
      randomize,
      loadMore,
   ] = usePokemons();

   const [selectedOption, setSelectedOption] = useState("First to Last");

   return (
      <Body>
         <Navbar showForm={true} {...{ allPokemons, setSelectedOption }} />
         <Main>
            <section className="grid sm:grid-cols-2 gap-2 md:gap-24 mb-5 text-white">
               <Shuffle {...{ randomize, setSelectedOption }} />
               <Select
                  dispatch={dispatch}
                  ordered={ordered}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
               />
            </section>
            {isLoading ? (
               <Loading />
            ) : (
               <>
                  {displayedPokemons.length ? (
                     <Cards>
                        {displayedPokemons.map((pokemon) => (
                           <Card key={pokemon.id} pokemon={pokemon} />
                        ))}
                     </Cards>
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
