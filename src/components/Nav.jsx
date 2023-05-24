
function Nav (prop) {

  return (
    <ul className="navbar">
        <li><a>All</a></li>
        <li><a onClick={prop.active}>Active</a></li>
        <li><a onClick={prop.completed}> Completed </a></li>
    </ul>
  )
}
export default Nav