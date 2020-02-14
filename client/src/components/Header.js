import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'


const Header = () =>{
    return(
        <div className="ui secondary pointing menu">
            <Link to="/" className="item"><i className="ui middle aligned black play icon"> </i>Streamer</Link>
            <div className = "right menu">
            <Link to="/" className="item">All Streams</Link>
            <GoogleAuth />
            </div>
        </div>
    )
}

export default Header
