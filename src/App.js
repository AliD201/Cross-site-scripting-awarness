import "./App.scss";
import XSS from './XSS'
import HomePage from './HomePage'
import './transition.min.css'
import './loading.min.css'
import {Route,  Switch} from 'react-router-dom'
// import {BrowserRouter as Router} from 'react-router-dom'
import { HashRouter as Router } from 'react-router-dom'


function App() {

  return (
    <div className="App">
      {/* <header className="App-header"></header> */}

      <Router >
      <Switch>
        <Route path="/" exact  component={HomePage} />
        <Route path="/XSS" exact  component={XSS} />
      </Switch>
    </Router>

      
    </div>
  );
}

export default App;
