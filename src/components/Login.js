import React from 'react'

function Login() {
  return (
    <div>
        <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">LOGIN</button>
        </form>
    </div>
  )
}

export default Login;