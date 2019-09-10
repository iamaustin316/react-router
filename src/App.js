import React from 'react';
import Home from './component/Home';
import About from './component/About';
import Shop from './component/Shop';
import Search from './component/Search';
import Nav from './component/Nav';
import NoMatch from './component/NoMatch';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {MovieProvider} from './component/MovieContext';
import './App.css';



function App() {
    return (
        <Router>
            <MovieProvider>
                <div className="App">
                    <Nav/>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/shop" component={Shop} />
                        <Route path="/search" component={Search} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </MovieProvider>
        </Router>
    );
}

export default App;
