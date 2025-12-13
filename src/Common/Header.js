import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <header className='header'>
        <div className='links'>
          <span className='project-name'>TrackIT</span>
          <NavLink to={"/"}><p className='para'>Home</p></NavLink>
          <NavLink to={"/tasks"}>Tasks</NavLink>
          <NavLink to={"/notes"}>Notes</NavLink>
          <NavLink to={"/search"}>Search</NavLink>
          <NavLink to={"/profile"}>Profile</NavLink>
          <NavLink to={"/login"}>Login</NavLink>
        </div>
      </header>
  )
}
export default Header;
