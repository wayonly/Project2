import { Link, useMatch, useResolvedPath } from "react-router-dom"


export default function Navbar() {
  return (
  
    <nav className="nav">
      <Link to="/" className="site-title">
      Laundry Delivery
      </Link>
      <ul>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/signup">Signup</CustomLink>
        <CustomLink to="/signin">Signin</CustomLink>
        <CustomLink to="/reservation">reservation</CustomLink>
        <CustomLink to="/service">Service</CustomLink>
        <CustomLink to="/location">Location</CustomLink>
       
      </ul>
    </nav>
    
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
