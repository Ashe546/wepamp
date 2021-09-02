
import { BrowserRouter as Router, Route, Switch, Link  } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Nav from './Layout/navbar'
import Home from './components/Homepage/home'
import Message from "./components/Messagepage/Message"

import Bottomnav from "./Layout/Bottomnav"




function App() {
  return (
    <div className="App">
        <Nav />
      <Router>
          <Switch>
            <Route exact path = "/" component={Home} />
            <Route exact path = "/message" component={Message} />
             <Route exact path = "/b" component={Bottomnav} />
          </Switch>
      </Router>
           
     

    </div>
  );
}




export default App;
