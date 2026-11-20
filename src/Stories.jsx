import React, { useEffect } from 'react'
import { useState } from 'react'

function Stories() {


  const [story, setstory] = useState([])
  

  useEffect(() => {
    
    fetch("http://localhost:3001/story")
      .then(data => data.json())
      .then(data => setstory(data))
    .catch((err)=>console.log(err))
  }, [])
   
  



  return (
    <div className=" story d-flex ">
      {story.length > 0 ?
        (story.map((sto)=>(
      
          < div key={sto.id}  className='mx-1' >
            <div className='story-img'>
               <img src={sto.profileImage} alt="dp" className='storydp  rounded-circle' />
            </div>
           
            <p className='text-truncate' style={{ width:"50px"}}>{sto.username   }</p>

          </div>
          
        ))):
        (<p>loading</p>)}

    </div>
  )
}

export default Stories