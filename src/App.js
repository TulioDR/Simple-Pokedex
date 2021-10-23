// import logo from './logo.svg';
import "./App.scss";

// Pages
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from "react-router-dom";

export default function App() {
   return (
      <Router>
         <Switch>
            <Route exact path="/">
               <Redirect to="/pokedex/allpokemons" />
            </Route>
            <Route exact path="/pokedex">
               <Redirect to="/pokedex/allpokemons" />
            </Route>

            <Route exact path="/pokedex/:searchQuery">
               <Pokedex />
            </Route>

            <Route exact path="/pokemon/:pokemonName">
               <Pokemon />
            </Route>
         </Switch>
      </Router>
   );
}
