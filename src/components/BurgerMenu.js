import React from 'react'
import Menu from 'react-burger-menu/lib/menus/slide'
import { NavLink, Link } from 'react-router-dom'

export default function BurgerMenu(props) {
    return (
            <Menu
                right
                htmlClassName={'nav-links'}
                isOpen={props.menuOpen}
                onStateChange={(state) => props.handleStateChange(state)}>
                <NavLink onClick={() => props.closeMenu} to="/" className="nav-link" activeClassName="is-active" exact={true}>Home</NavLink>
                <NavLink onClick={() => props.closeMenu} to="/filter" className="nav-link" activeClassName="is-active">Filter</NavLink>
                <NavLink onClick={() => props.closeMenu} to="/contact" className="nav-link" activeClassName="is-active">Contact</NavLink>
            </Menu>
    )
}
