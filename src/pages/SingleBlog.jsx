import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BlogData } from '../Data';
import { Link } from 'react-router-dom';
import axios from "axios"
const backend = import.meta.env.VITE_BACKEND_URL


const SingleBlog = () => {

    const [isLoading, setIsLoading] = useState(true)

    const {id} = useParams();

    const [blog, setBlog] = useState([])

    const getBlogFromId = async (id)=>{
      const response = await axios.get(`${backend}/blogs/${id}`)
      console.log(response);
      setBlog(response.data[0])
      setIsLoading(false)
    }

    useEffect(()=>{
      getBlogFromId(id)
    },[])



  return (
    <div className='bg-gray px-10 py-6'>
        <Link to={"/"} className="bg-black text-white p-3" >Back</Link>
        {
          isLoading?
          <div className='text-2xl text-blue-300 text-center'>Data is Loading.....</div>
          :
          <>
          <h1 className='text-3xl my-5'>{blog.title}</h1>
          <p className='text-2xl'>{blog.content}</p>
          </>
        }
    </div>
  )
}

export default SingleBlog