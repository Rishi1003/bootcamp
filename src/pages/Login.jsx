import axios from 'axios';
import React from 'react'

const backend = import.meta.env.VITE_BACKEND_URL

function Login() {

  console.log(backend);

  return (
    <div className='flex flex-col gap-3'>
        
        <h1>Login</h1>

        <input id="email"  className='border-2 border-black max-w-[300px]' type="text"/>
        <input id="password" className='border-2 border-black max-w-[300px]' type="password"/>

        <button className='bg-orange-300 rounded px-4 py-2' onClick={async ()=>{
            console.log(document.getElementById("email").value);
            console.log(document.getElementById("password").value);

            const resp = await axios.post(`${backend}/login`,{
                email:document.getElementById("email").value,
                password:document.getElementById("password").value
            })

        }}>Login</button>
    </div>
  )
}

export default Login