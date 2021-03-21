import './App.css';
import Header from './components/Header'
import { Switch, Route, Link } from 'react-router-dom'
import Beers from './pages/Beers'
import Home from './pages/Home'
import BeerDetails from './pages/BeerDetails'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/beers" exact>
          <Beers />
        </Route>
        <Route path="/beers/:id" exact>
          <BeerDetails />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
