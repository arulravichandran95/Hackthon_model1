import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with', email, password);
  };

  return (
    <div className="login-wrapper">
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      
      <div className="login-container">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Sign in to continue to your account</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              placeholder="name@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          
          <div className="forgot-password">
            <a href="#">Forgot your password?</a>
          </div>
          
          <button type="submit" className="btn-primary">
            Sign In
          </button>
        </form>
        
        <div className="divider">or continue with</div>
        
        <div className="social-login">
          <button className="btn-social">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.8 15.7 17.58V20.34H19.27C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4"/>
              <path d="M12 23C14.97 23 17.46 22.02 19.27 20.34L15.7 17.58C14.72 18.24 13.46 18.66 12 18.66C9.17 18.66 6.77 16.75 5.88 14.18H2.21V17.03C4.01 20.61 7.71 23 12 23Z" fill="#34A853"/>
              <path d="M5.88 14.18C5.65 13.5 5.52 12.77 5.52 12C5.52 11.23 5.65 10.5 5.88 9.82V6.97H2.21C1.46 8.46 1.04 10.17 1.04 12C1.04 13.83 1.46 15.54 2.21 17.03L5.88 14.18Z" fill="#FBBC05"/>
              <path d="M12 5.34C13.62 5.34 15.07 5.9 16.21 6.98L19.34 3.85C17.45 2.09 14.97 1 12 1C7.71 1 4.01 3.39 2.21 6.97L5.88 9.82C6.77 7.25 9.17 5.34 12 5.34Z" fill="#EA4335"/>
            </svg>
            Google
          </button>
          <button className="btn-social">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
            GitHub
          </button>
        </div>
        
        <div className="signup-link">
          Don't have an account? <a href="#">Sign up now</a>
        </div>
      </div>
    </div>
  );
}

export default App;
