import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { 
  Home,
  Projects, 
  Bio, 
  Contact,
  // TopBar,
  Resume
 } from '../src/components'
import './App.css';

const wakeApi = async () => {
  const data = await fetch('https://portfolio-comments.herokuapp.com/comments')
  const json = await data.json()
  return json
}

function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path="/" component={Home}/>
      <Route exact path="/projects" component={Projects}/>
      <Route path="/bio" component={Bio}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/resume" component={Resume} />
    </Router>
    </div>
  );
}

export default App;
