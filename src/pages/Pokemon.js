// Hooks
import usePokemonInfo from "../hooks/usePokemonInfo";

import Description from "../components/Description";
import Info from "../components/Info";
import Type from "../components/Type";
import Img from "../components/Img";

// Containers
import Body from "../containers/Body";
import Main from "../containers/Main";

// Components
import Navbar from "../containers/Navbar";
import Stats from "../components/Stats";
import Title from "../components/Title";
import Groups from "../components/Groups";
import Evolution from "../components/Evolution";
import Loading from "../components/Loading";

export default function Pokemon() {
   const [pokemonDetails, isLoading] = usePokemonInfo();

   return (
      <Body>
         <Navbar showForm={false} />
         <Main>
            {isLoading ? (
               <Loading />
            ) : (
               <>
                  <Title
                     data={pokemonDetails.mainData}
                     species={pokemonDetails.species}
                  />
                  <section className="grid md:grid-cols-2 gap-3">
                     <Img data={pokemonDetails.mainData} />

                     <div className="row-span-2 flex flex-col justify-between">
                        <Description species={pokemonDetails.species} />
                        <Info
                           data={pokemonDetails.mainData}
                           species={pokemonDetails.species}
                        />
                        <Type data={pokemonDetails.mainData} />
                        <Groups species={pokemonDetails.species} />
                     </div>

                     <Stats data={pokemonDetails.mainData} />
                  </section>
                  <Evolution evolution={pokemonDetails.evolution} />
               </>
            )}
         </Main>
      </Body>
   );
}
