import React, { Component } from 'react'
import Shoping from '../page/Shoping/Shoping'
import Contact from '../page/Contact/Contact'
import About from '../page/About/About'
import Home from '../page/Home/Home'
import { Route } from 'react-router-dom'

export default class Routes extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path='/home' component={Home} />
                <Route exact path='/shoping' component={Shoping} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/about' component={About} />
            </React.Fragment>
        )
    }
}