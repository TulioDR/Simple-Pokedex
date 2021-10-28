// Hooks
import usePokemonDetails from "../hooks/usePokemonDetails";

// Containers
import Body from "../containers/Body";
import Main from "../containers/Main";

// Components
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";

import Stats from "../components/Details/Stats";
import Title from "../components/Details/Title";
import Groups from "../components/Details/Groups";
import Description from "../components/Details/Description";
import Info from "../components/Details/Info";
import Type from "../components/Details/Type";
import Img from "../components/Details/Img";
import Evolution from "../components/Details/Evolution";

export default function Details() {
   const [pokemon, isLoading] = usePokemonDetails();
   const { mainData, species, evolution } = pokemon;

   return (
      <Body>
         <Navbar showForm={false} />
         <Main>
            {isLoading ? (
               <Loading />
            ) : (
               <>
                  <Title data={mainData} species={species} />
                  <section className="grid md:grid-cols-2 gap-3">
                     <Img data={mainData} />

                     <div className="row-span-2 flex flex-col justify-between">
                        <Description species={species} />
                        <Info data={mainData} species={species} />
                        <Type data={mainData} />
                        <Groups species={species} />
                     </div>

                     <Stats data={mainData} />
                  </section>
                  <Evolution evolution={evolution} />
               </>
            )}
         </Main>
      </Body>
   );
}
