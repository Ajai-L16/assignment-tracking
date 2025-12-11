import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <header className='header'>
        <div className='links'>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/notes"}>Notes</NavLink>
          <NavLink to={"/tasks"}>Tasks</NavLink>
          <NavLink to={"/search"}>Search</NavLink>
          <NavLink to={"/profile"}>Profile</NavLink>
        </div>
      </header>
  )
}
export default Header;
