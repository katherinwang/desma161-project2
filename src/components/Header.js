import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className="header">
        <Link className="nav" to='/'>
          <p className="title">KATHERINE WANG’S COLLEGE TIMELINE </p>
        </Link>
        <div className="descrip">
            <p className="title">Hi there, I’m Katherine! I’m a third-year undergraduate at UCLA, studying design and cognitive science. I’m on an endless journey of learning and creating, living each day to the fullest. 
                <br/>
                <br/>
                Here is what I’ve been up to these past couple of years; here’s where I got to where I am. </p>
        </div>
    </div>
  )
}

export default Header
