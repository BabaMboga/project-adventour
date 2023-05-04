import React from 'react'
import "./Login.css"

function Login() {
  return (
    <div className='Row'>
        <form>
          <h1>LOG IN FORM</h1>
          <div className='form'>
            <input type="text" placeholder="Username" required/>
            <br />
            <input type="password" placeholder="Password" required/>
          </div>
            <br />
          <div className='btn'>
            <button type="submit">LOGIN</button>
          </div>
        </form>
    </div>
  )
}

export default Login;