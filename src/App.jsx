import React, { useState } from 'react'
import Router from './router'
import { Link } from 'react-router-dom'
function App() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <div style={{ display: "flex", }}>
      {isLogin &&
        <div style={{ background: "#1e1", display: "flex", flexDirection: "column", height: "100vh" }}>
          <Link to={'/'}>Login</Link>
          <Link to={'/home'}>Home</Link>
        </div>
      }
      <div>
        <Router />
      </div>
    </div>
  )
}

export default App
