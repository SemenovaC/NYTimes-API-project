import { Link, NavLink } from "react-router-dom";
import './navMenu.css';


const NavMenu = () => {
  return (
    <header className="menu-header">
      <h1 className="menu-title">
        <Link style={{textDecoration: 'none', color: 'black'}} to="/">
          The New York Times portal
        </Link>
      </h1>
      <nav >
        <ul className="menu-navigation">
          <li className="menu-navigation-item">
            <NavLink 
                    className='menu-navigation-link' 
                    end 
                    to="/findarticle">
              Find an article 
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavMenu;