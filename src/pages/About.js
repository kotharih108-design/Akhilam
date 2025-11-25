import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { Link } from 'react-router-dom'

const About = () => {
  return (<>
    <Breadcrumb />

<div className='my-10 flex justify-center'>

    <Link to="/" className="bg-brandBlue text-white px-3 sm:px-6 py-3 rounded-md font-medium hover:bg-brandOrange transition text-2xl" >Go To Home</Link>
</div>
  </>
  )
}

export default About