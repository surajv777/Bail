import React from 'react';
import './BailForm1.css';

const BailForm1 =()=>{
    return (
        <div className='wrapper'>
         <form action="">
             <h1>Login</h1>
             <p>Welcome to the bail process w we make your bail application easier</p>
             <div className='input-box'>
                 <input type='text' placeholder="Username" required/>
             </div>
             <div className='input-box'>
                 <input type='text' placeholder="Password" required/>
             </div>
             <div className="remember-forgot">
                 <label> <input type="checkbox"/>Remember me</label>
                 <a href="#">Forgot Password?</a>
             </div>
 
             <button type="submit">Login</button>
 
             <div className="register-link">
                 <p>Don't have an account<a herf="#">Register</a></p>
             </div>
          </form>   
 
         </div>
     );
    };
export default BailForm1;