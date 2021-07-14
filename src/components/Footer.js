import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="footer-wrapper">
            <div className="container footer">
                <div className="footer__first-column">
                    <p className="copyright">Almanax data provided with 💓 by <a href="https://alm.dofusdu.de/q/swagger/#/">Almanax API</a> by stelzo.</p>
                    <p className="credits">All images belong to <a href="http://www.ankama.com">Ankama©</a></p>
                </div>
                <div className="footer__second-column">
                    <div className="footer__logo">
                        <h4 className="footer__column footer__logo--title">Almanax</h4>
                        <h4 className="footer__column footer__logo--accents">App</h4>
                    </div>
                    <hr className="footer__divider"/>
                    <div className="second-column__links">
                        <NavLink to="/" className="nav-link" exact={true}>Home</NavLink>
                        <NavLink to="/filter" className="nav-link">Filter</NavLink>
                        <NavLink to="/contact" className="nav-link">Contact</NavLink>
                    </div>
                </div>
            </div>
        </footer>
    )
}
