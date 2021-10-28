// import logo from './logo.svg';
import "./App.scss";

// Pages
import Pokedex from "./pages/Pokedex";

import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from "react-router-dom";
import Details from "./pages/Details";

export default function App() {
   return (
      <Router>
         <Switch>
            <Route exact path="/">
               <Redirect to="/pokedex/all-pokemons" />
            </Route>

            <Route exact path="/pokedex">
               <Redirect to="/pokedex/all-pokemons" />
            </Route>

            <Route exact path="/pokedex/:searchQuery">
               <Pokedex />
            </Route>

            <Route exact path="/pokemon/:pokemonName">
               <Details />
            </Route>
         </Switch>
      </Router>
   );
}
