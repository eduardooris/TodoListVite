import React, { useState } from 'react'
import Router from './router'
import Design from './Design/Colors'
import Navigation from './components/Navigation'
function App() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <div style={{ display: "flex" }}>
      {!isLogin &&
        <Navigation />
      }
      <div style={styles.containerMain}>
        <Router />
      </div>
    </div>
  )
}

const styles = {
  containerMain: {
    height: "96vh",
    width: '80%',
    borderRadius: 40,
    padding: 30,
    margin: 20
  }
}

export default App
