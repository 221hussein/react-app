import {FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


//pass the title as a props
 function Navbar({ title }) {
   // const tile = 'GitHub Finder'
  return (
    <nav className='navbar  mb-12 shadow-lg bg-neutral 
    text-neutral-content'>
        <div className='container mx-auto'>
            <div className='flex-none px-2 mx-2'>
                <FaGithub className='inline pr-2 text-3xl'/>
                <Link to='/' className='text-lg font-bold 
                align-middle'>
                    {title}GitHub Finder
                </Link>
            </div>

            <div className='flex-1 px-2 mx-2'>
                <div className='flex justify-end'>
                    <Link to="/" className='btn btn-ghost btn-sm
                     rounded-btn'>
                        Home           
                    </Link>
                    <Link to='/about' className='btn  btn-sm rounded-btn'>
                        About           
                    </Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

Navbar.defaulProps = {
    tiatle : 'GitHub Finder'
}

Navbar.propTypes ={
    title : PropTypes.any
}
 
export default Navbar