import Image from 'next/image'
import React from 'react'

import logo from '@/public/prestalogo.png'
import facebooklogo from '@/public/facebook.png'
import xlogo from '@/public/xlogo.png'
import instagramlogo from '@/public/instagram.png'
import Link from 'next/link'

function Header() {
  return (
    <div className='sticky top-0 bg-black flex items-center  justify-between p-4 text-white shadow-2xl '>
      <div>
        <Image
          src={logo}
          alt='logo'
          width={100}
          height={200}
        />
      </div>

      <nav>
        <ul className='flex gap-4'>
          <li>
            <Link
              href='#'
            >
              ACCUEIL
            </Link>
            
            
          </li>
          <li>
            <Link
              href='#'
            >
              ANNUAIRE
            </Link>
          </li>
          <li>
            <Link
              href='#'
            >
              DOMAINES D&apos;ACTIVITE
            </Link>
          </li>
        </ul>
      </nav>

      <ul className='flex gap-4'>
        <li>
          <Link
            href='#'
          >
             <div className='relative h-full'>
                <Image
                  src={facebooklogo}
                  alt='logo facebook'
                  height={30}
                />
              </div>
          </Link>
        </li>

        <li>
          <Link
            href='#'
          >
             <div className='relative'>
                <Image
                  src={xlogo}
                  alt='logo x'
                  height={30}
                />
              </div>
          </Link>
        </li>

        <li>
          <Link
            href='#'
          >
             <div className='relative'>
                <Image
                  src={instagramlogo}
                  alt='logo instagram'
                  height={30}
                />
              </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
