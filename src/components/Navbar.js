import React from 'react'
import {Link} from 'react-router-dom'
function Navbar(){
    return(
        <div className="navbar">
            <h2>Pottery Clay</h2>
        <nav>
            <ul>
            <Link to="/">
                <li>Home</li>
                </Link>

                <Link to="/Shop">
                <li>Shop</li>
                </Link>

                <Link to="/Cart">
                <li>Shop-cart</li>
                </Link>
            </ul>
        </nav>
        </div>
    )
}

export default Navbar