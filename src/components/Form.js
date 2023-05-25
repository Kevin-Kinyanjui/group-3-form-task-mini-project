import React, { useState } from "react";

function Form() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeUsername(event) {
    setUserName(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ userName }, { password });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="username-input"
          type="text"
          onChange={handleChangeUsername}
          placeholder="Username"
        />
        <input
          id="password-input"
          type="text"
          onChange={handleChangePassword}
          placeholder="Password"
        />
        <button id="login-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
