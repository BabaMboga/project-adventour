import React from 'react'

function Login() {
  return (
    <div>
        <form>
            <input type="text" placeholder="Username" required/>
            <input type="password" placeholder="Password" required/>
            <button type="submit">LOGIN</button>
        </form>
    </div>
  )
}

export default Login;