import React from 'react'
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
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <button type="submit">LOGIN</button>
        </form>
    </div>
  )
}

export default Login;