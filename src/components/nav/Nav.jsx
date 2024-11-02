
import './Nav.css'
const Nav = () => {
  return (
    <div className='nav'>
      <div className='nav-logo'>EV-Motors</div>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='nav-contact'>Contact</li>
      </ul>
    </div>
  )
}

export default Nav
