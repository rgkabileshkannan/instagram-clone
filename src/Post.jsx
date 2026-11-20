import React, { useEffect, useState } from 'react'

function Post() {

    
    const [posts, setposts] = useState([]);

    useEffect(() => {
          
        fetch("http://localhost:3001/posts")
            .then((data) => data.json())
            .then((data) => setposts(data))
            .catch((error) => console.log(error))
    }, [])





    return (
        <div className='d-flex justify-content-center'>
            {posts.length > 0 ? (
                <div>
                    {posts.map((post) => (
                        <div className='my-3' key={post.id }>
                            
                            <div className='d-flex'>
                                <img className=' dp rounded-circle' src={post.profileImage} alt="" />
                                <h5>{ post.username}</h5>
                            </div>
                            <img className='image' src={post.postImage} alt="post" />
                            <div className='down'>
                                <i className="bi bi-heart"></i>
                                <i className="bi bi-chat"></i>
                                <i className="bi bi-send"></i>
                            </div>
                            <div className='like'>
                                <b>{post.likes } likes</b>
                            </div >
                            <p className='caption'>{post.caption }</p>
                    </div>
                ))}
            </div>
            ) : ( 
                    <div>
                        loading posts;  
                    </div>
            )}
          
        

        </div>
    )
}


export default Post