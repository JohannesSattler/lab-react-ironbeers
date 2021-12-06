import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div>
            <Link to="/beers">Beers</Link>
            <Link to="/random-beer">Random Beers</Link>
            <Link to="/new-beer">New Beers</Link>
        </div>
    )
}

export default Home
