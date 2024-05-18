import React from "react";

export function SignUpForm() {
  return (
    <>
      <article class="signup-container">
        <h1>Sign Up</h1>
        <section id="signup-window">
          <form id="signup-form" method="post">
            <label for="uname"><b>Username</b></label>
            <input type="text" name="username" id="unameSign" required />
            <label for="psw"><b>Password</b></label>
            <input type="password" name="password" id="pswSign" required />
            <button id="signup-btn">Sign Up</button>
          </form>
        </section>
      </article>
    </>
  );
}