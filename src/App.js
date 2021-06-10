import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Directors from './containers/Directors'
import Navigation from './components/Navigation'
import Director from './containers/Director'


function App() {
  return (
    <div className="App"> 
      <Router>
        <Navigation/>
        <Switch>
          <Route  exact path='/' component={Home} />
          <Route  exact path='/directors' component={Directors}/>
          <Route  exact path='/directors/:id' component={Director}/>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
