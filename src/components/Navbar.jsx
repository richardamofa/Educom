function Navbar() {
  return (
    <div className="container">
    <nav>
      <h2>Edu<span>com</span></h2>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#teachers">Teachers</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button onClick={window.location='signup'}>Sign In</button>
    </nav>
    </div>
  );
}

export default Navbar;
