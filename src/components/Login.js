import React from 'react'
import "./Login.css"

function Login() {
  return (
    <div className='Row'>
        <form>
            <input type="text" placeholder="Username" required/>
            <input type="password" placeholder="Password" required/>
            <button type="submit">LOGIN</button>
        </form>
    </div>
  )
}

export default Login;