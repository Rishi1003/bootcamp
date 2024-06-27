import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const backend = import.meta.env.VITE_BACKEND_URL


import axios from "axios"
import { useNavigate } from 'react-router-dom';

export const BlogPost = () => {

  const navigate = useNavigate()

  const sendData = async (title, content)=>{
    try {
      const response = await axios.post(`${backend}/blogs/`,{
        title:title,
        content:content
      })
      return navigate("/")
    } catch (error) {
      console.log(error);
      toast.error("opps we have a problem please try after sometime")
      setIsError(true);
    }
  }

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const [isError, setIsError] = useState(false)




  return (
   <>
   <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
   <Navbar/>
     <div>


      <form className='flex flex-col px-10 mt-10 min-h-screen'>

        <label htmlFor='title' className='text-2xl'>Title</label>
        <input value={title} onChange={(e)=>{
          setTitle(e.target.value);
        }} type="text" id="title" className='px-6 py-2 border-2 border-black max-w-96 rounded mt-4'/>
        
        <label htmlFor='content' className='text-2xl mt-8'>Content</label>
        <textarea onChange={(e)=>{
          setContent(e.target.value)
        }} id="content" className='px-6 py-2 border-2 border-black max-w-[100%] rounded mt-4 min-h-[500px]'/>

        <button onClick={()=>{
          

          if(title.length === 0 || content.length === 0)
          {
            toast("please enter all the details", {
              position: "bottom-center"
            })
            
          }
          else{
            sendData(title,content)
          }


        }} type='button' className='mt-3 px-3 py-2 max-w-fit rounded bg-blue-400 text-white font-semibold'>Submit</button>

      </form>

     </div>
   </>
  )
}
