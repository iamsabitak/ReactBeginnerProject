import React from 'react'
import Person from './Person'
export const Contact = () => {
  return (
    <div>Contact
        <h1 style={{padding:'2rem'}}>My Bio</h1>
        <Person Name = {'Sabita Khadka'} age='18' email={'sabitakhadka091@gmail.com'}/>
    </div>
  )
}
export default Contact