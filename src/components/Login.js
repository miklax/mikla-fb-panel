import React from 'react';
import { component } from 'react';

const Login = () => (
  <form>
    <h2>Login</h2>
    <input type="text" required placeholder="Username"/>
    <input type="password" required />
    <button type="submit">Login</button>
  </form>
)

export default Login;