import React from "react"
import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <nav id="navbar">
            <NavLink to="/all_words">All iCare</NavLink>
            <NavLink to="/random_words">Random iCare</NavLink>
            <NavLink to="/add_words">Submit iCare</NavLink>
        </nav>
    )
}

export default Navbar