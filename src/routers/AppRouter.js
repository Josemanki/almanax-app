import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import React from 'react';
import Header from '../components/Header'
import Contact from '../components/Contact'
import FilterPage from '../components/FilterPage'
import Footer from '../components/Footer'
import HomePage from '../components/HomePage'
import NotFoundPage from '../components/NotFoundPage'


const AppRouter = () => (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/filter" component={FilterPage} exact={true} />
                <Route path="/contact" component={Contact} exact={true} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </div>
    </Router>
)

export default AppRouter;