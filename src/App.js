import React, { useState,useEffect } from 'react'
import Person from './components/Person'

const App = () => {
  let bgcolor =()=>{
    document.querySelector('body').style.backgroundColor = 'red'//<--events
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
    <div 
    style={{display:'flex', 
       justifyContent:'center',
       alignItems:'center',
       flexDirection:'column'
      }}>
        {/* {events} */}
     <button onClick={bgcolor} //{bgcolor()} will directly change the backgroundcolor
     style={{padding:'10px',
     fontSize:'1rem'}} >Click here to change backgroungcolor</button> 
      <h1 style={{padding:'2rem'}}>My Bio</h1>
      <Person Name = {'Nabin Khadka'} age={'25'} email={'nabinkhadka091@gmail.com'}/>
      {/* <Person Name = {'Sabita Khadka'} age='18' email={'sabitakhadka091@gmail.com'}/>
      <Person Name = {'Nirmala Khadka'} age={'17'} email={'nirmalakhadka091@gmail.com'}/>  */}
     <h1 id='counter'> Counter = {Counter}</h1>
     <button 
     onClick={onClickIncrease}
  //   onClick={()=>{  //<-- can be done like this also
  //     setCounter(Counter+1);
  // }}
      style={{margin:'5px', fontSize:'10px',padding:'10px'}}>Increase by 1</button>
     <button 
     onClick={onClickDecrease} 
  //    onClick={()=>{     //<-- can be done like this also
  //     setCounter(Counter+1);
  // }}
     style={{margin:'5px', fontSize:'10px',padding:'10px'}}>Decrease by 1</button>
    </div>
  )
}

export default App
