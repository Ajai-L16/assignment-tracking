import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <header className='header'>
        <div className='links'>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/cart"}>Tasks</NavLink>
          <NavLink to={"/search"}>Search</NavLink>
          <NavLink to={"/profile"}>Profile</NavLink>
        </div>
      </header>
  )
}
export default Header;
