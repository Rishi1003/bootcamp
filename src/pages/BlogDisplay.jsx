import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import {BlogData} from "../Data"
import { Card } from '../components/Card'
import axios from "axios";

const backend = import.meta.env.VITE_BACKEND_URL


const BlogDisplay = () => {

  const [data, setData] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  // async function getData()
  // {
  // 
  // }

  const getData = async ()=>{
    const response = await axios.get(`${backend}/blogs`)
    console.log("**********************")
    console.log(response);
    console.log("**********************")
    setData(response.data)
    setIsLoading(false);
  }

  useEffect(()=>{
    getData()
  },[])

  
  return (
    <>
        <Navbar/>
        <div className='bg-gray-300 p-5 text-black' >
            <h1 className='text-3xl'>Blogs</h1>
            {
              isLoading?
              <div>Loading data from backend....</div>
              :
              <div className='p-3'>
                {data.map((item)=>{
                    return <Card key={item.key} item={item}  />
                })}
            </div>
            }
        </div>
    </>
  )
}

export default BlogDisplay