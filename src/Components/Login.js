import React, { useState } from 'react';
import './App.css';

const Login = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    props.history.push('/home');
  }

  return (
      <div className="mainlogin">
            <div className="headerlogin">
            <h3>Login</h3>
        </div>

    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      
<form >
            <div className="form-group text-left">
                <label htmlFor="UserName">User Name</label>
                <input type="text" 
                       className="form-control" 
                       id="UName" 
                       placeholder="UserName" required
                       onChange={e => setUsername(e.target.value)}
                />
                </div>

                <div className="form-group text-left">
                <label htmlFor="lastName">Password</label>
                <input type="text" 
                       className="form-control" 
                       id="password" 
                       placeholder="Password" required
                       onChange={e => setPassword(e.target.value)} />
            
                </div>
                <input type="button" value={loading ? "loading.." : "Login"} disabled={loading} onClick={handleLogin} />
   


</form>
     
    </div>
    <br/>
    <p>Forgot your password? <a href="/ForgotPassword">Click here!</a> </p>
    </div>

  )
}

export default Login;
