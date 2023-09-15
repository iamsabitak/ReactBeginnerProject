import React from "react";
import { useState } from "react";
function Form() {
  
  const [form, setForm] = useState()
//   const [form, setForm] = useState({
//     name:'' ,
//    email:'',
//    password:'' 
 
// }
  const onChange = (e) => {
    setForm(e.target.value)
  }
  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Form</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={form}
          onChange={onChange}
          style={{
            height: "2rem",
            width: "16rem",
            fontSize: "20px",
            margin: "1rem",
          }}
        />
        <br />
        <label htmlFor="name">Email</label>
        <input
          type="text"
          value={form}
          onChange={(e) => setForm(e.target.value)}
          style={{
            height: "2rem",
            width: "16rem",
            fontSize: "20px",
            margin: "1rem",
          }}
        />
        <br />
        <label htmlFor="name">Password</label>
        <input
          type="text"
          value={form}
          onChange={(e) => setForm(e.target.value)}
          style={{
            height: "2rem",
            width: "16rem",
            fontSize: "20px",
            margin: "1rem",
          }}
        />
        <br />
        <input
          type="submit"
          style={{
            height: "2rem",
            margin: "2rem",
          }}
        />
        <h1>{form}</h1>
      </form>
    </div>
  );
}

export default Form;
