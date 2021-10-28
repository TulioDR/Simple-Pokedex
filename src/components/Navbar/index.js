import NavContainer from "./NavContainer";
import NavBrand from "./NavBrand";
import NavForm from "./NavForm";
import NavBackBtn from "./NavBackBtn";

export default function Navbar({ showForm, allPokemons }) {
   return (
      <NavContainer>
         <NavBrand />
         {showForm ? <NavForm {...{ allPokemons }} /> : <NavBackBtn />}
      </NavContainer>
   );
}
