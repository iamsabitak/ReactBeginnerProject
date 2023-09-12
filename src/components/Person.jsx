import React from "react";
import "./Person.css"; //<--external css import

// const person = (props) => { //,<-- one way to use props
  const person = ({Name,age,email}) => { // <-- anotehr way to use props
  const obj = {
    Name: "Sabita Khadka",
    age: "18",
    email: "sabitakhadka091@gmail.com",
    class: "12",
  };
  // const myStyle ={
  //   border:'3px solid yellow', //<-- internal css
  //   padding:'2rem',
  // }
  return (
    <div
      className="container"
      
      // style={{
      //   border:'3px solid red', // <--inline css
      //   padding:'2rem',

      // }}
      // style = {myStyle} // <--internal css
    >
     
      {/* <h2>Name : {obj.Name}</h2>
      <h2>Age: {obj.age}</h2>
      <h2>email:{obj.email}</h2> */}
      {/* <h2>Name : {props.Name}</h2>
      <h2>Age: {props.age}</h2>
      <h2>email:{props.email}</h2> */}
      <h2>Name : {Name}</h2>
      <h2>Age: {age}</h2>
      <h2>email:{email}</h2> 
      <h2>class:{obj.class}</h2>
      <h3> This is Person Component</h3>
    </div>
     
  );
};

export default person;
