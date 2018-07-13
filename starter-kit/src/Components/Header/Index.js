import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => (
  <header>
    <nav>
      <ul className="component">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/About'>About</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header