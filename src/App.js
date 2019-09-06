import React from 'react';
import Home from './component/Home';
import About from './component/About';
import Shop from './component/Shop';
import Nav from './component/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/shop" component={Shop} />
                </Switch>
                <Nav/>
            </div>
        </Router>
    );
}

export default App;
