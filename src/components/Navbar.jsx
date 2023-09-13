import React from 'react'
import { Link  } from 'react-router-dom'
function Navbar() {
  return (
    <div style={{
        display:'flex',
        justifyContent:'space-evenly',
        height:'3rem',
        alignItems:'center',
        backgroundColor:"grey",
        fontSize:'15px',
        fontWeight:'bolder',
        
    }}>
        <Link to='/' className="items" style={{textDecoration:'none'}}>Home</Link>
        <Link to='/about' className="items" style={{textDecoration:'none'}}>About</Link>
        <Link to='/contact' className="items" style={{textDecoration:'none'}}>Contact</Link>
        <Link to='/teams' className="items" style={{textDecoration:'none'}}>Teams</Link>
    </div>
  )
}

export default Navbar