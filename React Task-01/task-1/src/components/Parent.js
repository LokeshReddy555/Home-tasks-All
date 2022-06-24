import React,{useCallback, useMemo, useState} from 'react'
import Childclass from './Childclass.js'
import Childfn from './Childfn.js';
import image from '../image.webp'

function Parent() {

    const [click, setClick] = useState(false);
    console.log("Parent Rendering")

    // objects, functions even though they are not changing,
    //  every time parent component renders,
    //  the new instances of them would be created and cause children to rerender,
    // so we use useMemo and useCallback   ***

    const person = {
        fname: 'lokesh',
        lname: 'reddy'
    }
    const memoizedPerson = useMemo(()=>person,[]);

   const handleClick = () => {}
   const memoizedHandleClick = useCallback(handleClick,[]);

  return (
    <div>
         <Childclass handleClick={memoizedHandleClick}/>
         <Childfn person={memoizedPerson}/>
         <h3> Welcome Everyone !</h3>
      <p>about: This page is just a practice for beginners in react
         to work on components and explore them</p>
         {/* causes multiple rerender if we not use arrow fn below*/}
         <button onClick={()=>setClick(true)}>Re-Render</button> <br></br>
         {
           click &&
         <img id='img' src={image} alt='explore-learn-grow'></img>
         }
         
        
    </div>
  )
}

export default Parent