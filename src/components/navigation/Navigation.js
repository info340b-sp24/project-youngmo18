import React, { useState, useEffect } from "react";
import { Hamburger } from "./Hamburger";

export function Navigation(props) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [history, setHistory] = useState('hidden');
  const [post, setPost] = useState('hidden');
  const [login, setLogin] = useState('show');
  const [logout, setLogout] = useState('hidden');

  const toggleHamburger = () =>{
    setHamburgerOpen(!hamburgerOpen)
  }
  // not too sure how to make humburger navigation work yet with react

  // let loggedIn = localStorage.getItem('loggedIn');
  // let history = 'hidden';
  // let post = 'hidden';
  // let login = 'show';
  // let logout = 'hidden';

  const handleLogoutChange = () => {
    console.log("logout");
    localStorage.removeItem('loggedIn');
    window.location.reload();
  };

  useEffect(() => {
    let loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn === 'user') {
      setHistory('show');
      setPost('hidden');
      setLogin('hidden');
      setLogout('show');
    } else if (loggedIn === 'worker') {
      setHistory('hidden');
      setPost('show');
      setLogin('hidden');
      setLogout('show');
    } else {
      setHistory('hidden');
      setPost('hidden');
      setLogin('show');
      setLogout('hidden');
    }
    // if (loggedIn === 'user') {
    //   console.log("success");
    //   history = 'show';
    //   post = 'hidden';
    //   login = 'hidden';
    //   logout = 'show';
    // } else if (loggedIn === 'worker') {
    //   history = 'hidden';
    //   post = 'show';
    //   login = 'hidden';
    //   logout = 'show';
    // } else {
    //   history = 'hidden';
    //   post = 'hidden';
    //   login = 'show';
    //   logout = 'hidden';
    // }
  }, []);

  return (
    <>
      <nav>
        <h1>JavaAir</h1>
        <div className="nav">
          <ul>
            <li>
              <a href="intro.html">Home</a>
            </li>
            <li>
              <a href="index.html">Book</a>
            </li>
            <li className={history}>
              <a href="bookingHistory.html">History</a>
            </li>
            <li className={post}>
              <a href="loggedInWorker.html">Post</a>
            </li>
            <li className={login}>
              <a href="login.html">Login</a>
            </li>
            <li className={logout}>
              <p href="login.html" className="logout" onClick={handleLogoutChange}>Logout</p>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleHamburger}>
          <Hamburger />
        </div>
      </nav>
    </>
  );
}