import React from 'react'
import {Link} from 'react-router-dom'
function Home(){

    return(
        <div className="home-container">
            <Link to="/Shop">
            <h1>View Products</h1>
            </Link>
        </div>
    )
}

export default Home