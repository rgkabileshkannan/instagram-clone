import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Viewstory() {

    const { id } = useParams();



    const [story, setstory] = useState(null)
    
    useEffect(() => {
        fetch(`http://localhost:3000/story/${id}`) 
            .then(data => data.json())
            .then(data => setstory(data))
        .catch((err)=>console.log(err))
    },[])

    return (
      
      <div>{story ? ():()}</div>
  )
}

export default Viewstory