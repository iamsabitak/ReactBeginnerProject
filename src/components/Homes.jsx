import React from 'react'
import { useState,useEffect } from 'react'
import Person from './Person'

function Homes() {
  let bgcolor =()=>{
    document.querySelector('body').style.backgroundColor = 'aqua'//<--events
  }
  // let Counter = 0
  // const onClickIncrease = ()=>{
  //   Counter = Counter+1;
  //   console.log(Counter);
    // document.getElementById('counter').innerHTML = Counter
  // }
  // const onClickDecrease = ()=>{
  //   Counter = Counter-1;
  //   console.log(Counter);
    // document.getElementById('counter').innerHTML = Counter
  // }
  const [Counter,setCounter] = useState(0) //<-- Hooks - useState 
  const onClickIncrease = ()=>{
      setCounter(Counter+1);
  }
  
  const onClickDecrease = ()=>{
      setCounter(Counter-1);
    }

    useEffect(() => {        // <--useEffect
      console.log("useEffect is Runnning");
    }, [Counter])
    
  return (
    <div>Home Page
      <div
    style={{display:'flex', 
       justifyContent:'center',
       alignItems:'center',
       flexDirection:'column',
      }}>
       
       <h1 style={{padding:'2rem'}}>My Bio</h1>
      <Person Name = {'Nabin Khadka'} age={'25'} email={'nabinkhadka091@gmail.com'}/>
      <Person Name = {'Sabita Khadka'} age='18' email={'sabitakhadka091@gmail.com'}/>
      <Person Name = {'Nirmala Khadka'} age={'17'} email={'nirmalakhadka091@gmail.com'}/> 
      <Person Name = {'Sona Khadka'} age={'30'} email={'sonakhadka091@gmail.com'}/> 
      
     <h1 id='counter'> Counter = {Counter}</h1>
     <button 
     onClick={onClickIncrease}
  //   onClick={()=>{  //<-- can be done like this also
  //     setCounter(Counter+1);
  // }}
      style={{margin:'5px', fontSize:'10px',padding:'10px'}}>Increase by 1</button>
     <button 
     onClick={onClickDecrease} 
  //    onClick={()=>{ //<-- can be done like this also
  //     setCounter(Counter+1);
  // }}
     style={{margin:'5px', fontSize:'10px',padding:'10px'}}>Decrease by 1</button>
 {/* {events} */}
     <br />
     <button onClick={bgcolor} //{bgcolor()} will directly change the backgroundcolor
     style={{padding:'10px',
     fontSize:'1rem'}} >Click here to change backgroungcolor</button> 
    </div>
    </div>
  )
}

export default Homes