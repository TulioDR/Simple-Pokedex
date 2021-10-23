import { Link } from "react-router-dom";

export default function NavBackBtn() {
   return (
      <div className="text-white absolute right-6 sm:right-0 top-3 h-8 flex items-center">
         <Link to={"/pokedex"}>Go Back</Link>
      </div>
   );
}
