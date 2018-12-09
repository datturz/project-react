import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export default class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to="kosong">BeardGrow</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto topnav">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/shoping">Shop</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>

                                <li className="nav-item float-left">
                                    <Link className="nav-link" to="kosong" data-toggle="modal" data-target="kosongmyModal">Sign In</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="kosong" data-toggle="modal" data-target="kosongmyModal">Register</Link>
                                </li>

                            </ul>

                        </div>
                    </div>

                </nav>

            </React.Fragment>

        )
    }
}