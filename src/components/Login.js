import {React, useState} from 'react'
import "./Login.css"

function Login({handleLogin}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] =useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  }
  return (
    <div className='Row'>
        <form onSubmit={handleSubmit}>
          <h1>LOG IN FORM</h1>
          <div className='form'>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
            <br />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
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