import { useState } from "react";
import { Link } from 'react-router-dom';

const Title = () => {
  return (
    <>
      <a href="/">
        <img src="https://shorturl.at/sHT36" alt="logo" className="logo" />
      </a>
    </>
  );
};


// const Loggedin = () => {
//     return false;
// }

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <Link to='/about'>
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <li>Cart</li>
        </ul>
      </div> 
      {isLoggedIn ? (
        <button className="btn" onClick={() => setIsLoggedIn(false)}>Logout</button>) : (
        <button className="btn" onClick={() => setIsLoggedIn(true)}>Login</button>)}
    </div>
  );
};

export default Header;