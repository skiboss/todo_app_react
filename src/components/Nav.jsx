
function Nav (prop) {

  return (
    <ul className="navbar">
        <li><a>All</a></li>
        <li><a onClick={prop.hey}>Active</a></li>
        <li><a > Completed </a></li>
    </ul>
  )
}
export default Nav