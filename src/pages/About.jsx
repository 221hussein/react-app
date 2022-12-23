import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
        <h1 className='text-6xl mb-5'>Github Finder</h1>
        <p className='mb-4 text-2xl font-light'>
            A React app to searc GitHub profiles and see profiles details
        </p>
        <Link to='/' className='btn btn-active'>
            Return Home page</Link>
    </div>
  )
}

export default About