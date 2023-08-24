import { Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import { Route } from 'react-router-dom';
import Buttons from './Components/Buttons';
import Animations from './Components/Animations';
import Nopage from './Components/Nopage';


function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/"> 
         <Dashboard/>
      </Route>

      <Route path="/buttons">
        <Buttons/>
      </Route>

      <Route path="/animations">
        <Animations/>
      </Route>

      <Route path="/nopage">
       <Nopage/>
      </Route>

    </Switch>

    </div>
  );
}

export default App;
