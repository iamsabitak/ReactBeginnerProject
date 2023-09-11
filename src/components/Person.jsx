import React from 'react'


const person = () => {
  const obj = {
    'Name':'Sabita Khadka',
   'age' : '18',
   'email':'sabitakhadka091@gmail.com'
    }
  return (
    <div>
      <h2>Name : {obj.Name}</h2>
    <h2>Age: {obj.age}</h2>
    <h2>email:{obj.email}</h2>
    <h3> This is Person Component</h3>
    </div>
  )
}

export default person