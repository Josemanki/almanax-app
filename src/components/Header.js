import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }
    openMenu = () => {
        const navList = document.querySelector('.nav-links')
        const logo = document.querySelector('.logo')
        navList.classList.toggle('show')
        logo.classList.toggle('is-optional')
    }
    closeMenu = () => {
        const logo = document.querySelector('.logo')
        const navList = document.querySelector('.nav-links')
        if(navList.classList.contains('show')) {
            navList.classList.remove('show')
            logo.classList.remove('is-optional')
        }
    }

    render() {
        return (
                <header className="header-wrapper">
                    <div className="container header">
                        <div className="logo">
                            <Link className="header__logo-link" to="/">
                                <h1 className="header__title">Almanax</h1>
                                <h1 className="header__title header__title--accent">App</h1>
                            </Link>
                        </div>
                        <nav className="nav-links">
                            <NavLink onClick={this.closeMenu} to="/" className="nav-link" activeClassName="is-active" exact={true}>Home</NavLink>
                            <NavLink onClick={this.closeMenu} to="/filter" className="nav-link" activeClassName="is-active">Filter</NavLink>
                            <NavLink onClick={this.closeMenu} to="/contact" className="nav-link" activeClassName="is-active">Contact</NavLink>
                        </nav>
                        <button onClick={this.openMenu} className="hamburger">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                </header>
        )
    }
}
