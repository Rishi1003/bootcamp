
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center p-9 bg-[#734ec9] h-[8px] text-white'>
        <h1 className='text-2xl'>Blog Website</h1>
        <div className='flex flex-row gap-10 text-2xl'>
            <Link to={"/"} >Blogs</Link>
            <Link to={"/create-blog"} >Create Blog</Link>
            <Link to={"/about"} >About me</Link>
        </div>
    </div>
  )
}
 
export default Navbar