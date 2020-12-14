import React from 'react';
import './index.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Profile from './components/Profile';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div className="App">
                <div className="container app__container">
                    <div className="row app__row">
                        <div className="col-lg-3">
                            <Sidebar />
                        </div>
                        <div className="col-lg-9 app_main-content">
                            <Navbar />
                            <Switch>
                                <Route exact path="/" component={About} />
                                <Route path="/projects" component={Projects} />
                                <Route path="/resume" component={Resume} />
                                <Route path="/profile" component={Profile}/>
                                <Route> <Redirect to="/" /> </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default App;