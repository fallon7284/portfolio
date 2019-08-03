import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home, Projects, Bio, Contact } from '../src/components'
import './App.css';
import TopBar from './components/topBar'



function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path="/" component={Home}/>
      <Route exact path="/projects" component={Projects}/>
      <Route path="/bio" component={Bio}/>
      <Route path="/contact" component={Contact}/>
      {/* <Route path = "/insta" component={Insta}/> */}
    </Router>
    </div>
  );
}

export default App;
