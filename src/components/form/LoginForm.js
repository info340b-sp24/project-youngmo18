import React, { useState } from "react";

const PASSWORD_TEST = [
  {
    "id": 1,
    "userType": "user",
    "username": "hello",
    "password": "bye"
  },
  {
    "id": 2,
    "userType": "worker",
    "username": "hola",
    "password": "adios"
  }
];

export function LoginForm() {
  const [userType, setUserType] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userButClass, setUserButClass] = useState('unclick-login-chooser');
  const [workerButClass, setWorkerButClass] = useState('unclick-login-chooser');


  const handleWorkerChange = () => {
    setUserType('worker');
    setUserButClass('unclick-login-chooser');
    setWorkerButClass('click-login-chooser');
  };

  const handleUserChange = () => {
    setUserType('user');
    setUserButClass('click-login-chooser');
    setWorkerButClass('unclick-login-chooser');
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // PUT USERTYPE, USERNAME, AND PASSWORD INTO DATABASE LATER

  console.log(userType);
  console.log(username);
  console.log(password);


  const handleSubmit = (event) =>  {
    // localStorage.setItem("myCat", "Tom");
    event.preventDefault();
    let checkLogin = PASSWORD_TEST.find((user) => {
      return user.userType === userType && user.username === username && user.password === user.password;
    });
    checkLogin ? localStorage.setItem("loggedIn", userType) : alert("unable to log in");
    window.location.reload();
  }
  return (
    <div className="login-form">
      <article className="login-chooser">
        <button onClick={handleWorkerChange} className={workerButClass}>Worker</button>
        <button onClick={handleUserChange} className={userButClass}>User</button>
      </article>
      <article className="login-container">
        <section className="login-window">
          <form method="post">
            <label for="uname"><b>Username</b></label>
            <input type="text" name="username" id="uname" placeholder="Enter your username" value={username} onChange={handleUsernameChange} required />
            <label for="psw"><b>Password</b></label>
            <input type="password" name="password" id="psw" placeholder="Enter your password" value={password} onChange={handlePasswordChange} required />
            <button id="login-btn" onClick={handleSubmit}>Login</button>
            {/* <a href="loggedInUser.html">Login</a> */}
          </form>
          {/* <!-- <p>Don't have an account? <a id="create-acc-nav">Create one</a>.</p> --> */}
          <button id="sign-up-btn">Sign Up</button>
          {/* <a href="signup.html">Sign Up</a> */}
        </section>
      </article>
    </div>
  );
}