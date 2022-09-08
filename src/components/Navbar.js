import React from "react"
import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <nav id="navbar">
            <NavLink to="/all_words">All Wisdom</NavLink>
            <NavLink to="/random_words">Random Wisdom</NavLink>
            <NavLink to="/add_words">Submit Wisdom</NavLink>
        </nav>
    )
}

export default Navbar