import React, { useEffect, useState } from 'react'

function Suggestion() {



  const [profile, setprofile] = useState(null)
  const[suggestion,setsuggestion]=useState([])
  
  useEffect(() => {
    
    fetch("http://localhost:3001/profile")
      .then((data) => data.json())
      .then((data) => setprofile(data))
    .catch((err)=>console.log(err))

  

       fetch("http://localhost:3001/suggestion")
      .then((data) => data.json())
      .then((data) => setsuggestion(data))
    .catch((err)=>console.log(err))
  }, [])



  return (
    <div className='suggestion   m-4'  >
    <div>
      {profile ?
        <div className='d-flex'>
          <img className=' dp rounded-circle' src={profile.profileImage} alt="" />
          <h5>{profile.username}</h5>
          <p className=' swt ms-auto text-primary'>Switch</p>
        </div>

          : <p>loading</p>}
        <div className='d-flex'>
          <h6>suggested for you</h6>
          <b className="ms-auto w-30">see All</b>
        </div>

      </div>
       <div>
                    {suggestion.map((sugg) => (
                        <div className="" key={sugg.id }>
                            
                            <div className='d-flex'>
                                <img className=' dp rounded-circle' src={sugg.profileImage} alt="" />
                          <h5>{sugg.username}</h5>
                          
                          <p className='text-primary ms-auto w-30  '>follow</p>
                            </div>
                            
                    </div>
                ))}
            </div>

    </div>
    
  )
}

export default Suggestion