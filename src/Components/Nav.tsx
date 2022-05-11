import { Link } from 'react-router-dom'
import '../Styles/Nav.css'
import Logo from '../Assets/Logo.jpg'
import React from 'react'

function Nav() {
  return (
    <div>
      <header>
        <nav>
          {/* <img className='logo' src={Logo} alt="" /> */}
          <h1 className='logo-text'>Rachela</h1>
          <div className="items">
            <Link className="Item-nav" to="/">Inicio</Link>
            <Link className="Item-nav" to="/">Sobre</Link>
            <Link className="Item-nav" to="/">Contato</Link>
            <Link className="Item-nav" to="/">Carrinho</Link>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Nav