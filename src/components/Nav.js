import React, { useEffect, useState } from 'react'
import "./Nav.css"

export default function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? handleShow(true) : handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll', () => {});
    }
  },[]);
  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <img 
      alt='netflix logo'
      src='//upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png'
      className='nav__logo'
      onClick={() => window.location.reload()}
      />
      <img 
        alt='User logged'
        src='' 
      />
    </nav>
  )
}
