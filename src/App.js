import logo from './logo.svg';
import './App.css';
import Inicio from './Componentes/Home/Inicio';
import HomeBodegas from './Componentes/CatalogoBodegas/HomeBodegas';
import HomeMenuBodegas from './Componentes/MenuBodegaIndividual/HomeMenuBodegas';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const App = () => {
  return (
   <>
   <Router >
      <Switch>
        <Route exact path="/"                 component={Inicio} />
        <Route exact path="/CatalogoBodegas"  component={HomeBodegas}/>
        <Route exact path="/MenuBodegas/:id"  component={HomeMenuBodegas}/>
      </Switch>
  </Router>
   </>
  );
}

export default App;
