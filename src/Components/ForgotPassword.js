import React, { useState } from 'react';
import './App.css';

const ForgotPassword = (props) => {

  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    props.history.push('/home');
  }

  return (
      <div className="mainlogin">
            <div className="headerlogin">
            <h3>Reset Password From</h3>
        </div>

    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      
<form >
            <div className="form-group text-left">
                <label htmlFor="Email">Email Address</label>
                <input type="text" 
                       className="form-control" 
                       id="UName" 
                       placeholder="Enter Your Email Address" required                      
                       onChange={e => setUsername(e.target.value)}
                />
                </div>
                <input type="button" value={loading ? "loading.." : "Send My Password"} disabled={loading} onClick={handleLogin} /> <br/><br/>
   


</form>
     
    </div>
    <br/> <br/>
    <p>Not Registered ?  <a href="/newhome">Sign up !!</a> </p> 
    </div>

  )
}

export default ForgotPassword;
