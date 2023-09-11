import React from 'react'
import Person from './components/Person'

const App = () => {
  return (
    <div>
      <h1>My Bio</h1>
      <div className="container"
      style={{
        border:'3px solid red',
        padding:'2rem',
      
      }}>
      {/* <Person />
      <Person />
      <Person /> */}
      <Person />
          </div>
    </div>
  )
}

export default App