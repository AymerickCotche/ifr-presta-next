import Image from 'next/image'
import React from 'react'

import logo from '@/public/prestalogo.png'
import facebooklogo from '@/public/facebook.png'
import xlogo from '@/public/xlogo.png'
import instagramlogo from '@/public/instagram.png'
import Link from 'next/link'
import ButtonRegisterForm from './ButtonRegisterForm'
import Navbar from './Navbar'

function Header() {

  return (
    <div className='sticky top-0 bg-black flex items-center  justify-between p-4 text-white shadow-2xl z-10'>
      

      <Navbar/>

      
    </div>
  )
}

export default Header
