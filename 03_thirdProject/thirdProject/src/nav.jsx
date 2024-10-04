import "./nav.css";

function Nav() {
  return (
    <div className="mainNav">
      <nav>
      {/* <a><img src=""></img></a> */}
        <ul className="navItems">
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>Contact</li>
          </a>
          <a href="#">
            <li>Course</li>
          </a>
          <a href="#">
            <li>About Us</li>
          </a>
          <input className="searchBox" placeholder="Search Here.........">

        </input>
        </ul>
        
      </nav>
    </div>
  );
}

export default Nav;
