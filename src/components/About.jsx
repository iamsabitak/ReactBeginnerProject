import React from 'react'
import Person from './Person'
const About = () => {
  return (
    <div>
        About

        <h1 style={{padding:'2rem'}}>My Bio</h1>
      <Person Name = {'Nabin Khadka'} age={'25'} email={'nabinkhadka091@gmail.com'}/>
      <Person Name = {'Sabita Khadka'} age='18' email={'sabitakhadka091@gmail.com'}/>
      <Person Name = {'Nirmala Khadka'} age={'17'} email={'nirmalakhadka091@gmail.com'}/> 
    </div>
  )
}

export default About