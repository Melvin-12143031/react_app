import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Site Name
      </Link>
      <ul>
        <CustomLink to="/pricing">Pricing</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/colorpickercontainer">Color Picker</CustomLink>
        <CustomLink to= "/StopwatchContainer">Stopwatch</CustomLink>
        <CustomLink to= "/UpdaterSpreadContainer">UpdaterSpread</CustomLink>
        <CustomLink to= "/UpdateStateArrayContainer">UpdateStateArray</CustomLink>
        

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
