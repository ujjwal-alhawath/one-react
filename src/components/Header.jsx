import React from 'react'
import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'

const Header = () => {
  return (
   <nav>
    <h1>one piece</h1>
    <main>
        <HashLink to={"/#home"}>home </HashLink> 
          <HashLink to={"/#about"}>about </HashLink> 
            <Link to={"/contact"}>contact </Link> 
              <HashLink to={"/#brands"}>brands </HashLink> 
                <Link to={"/services"}>services </Link> 
    </main>

   </nav>
  )
}

export default Header
