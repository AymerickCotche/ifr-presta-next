'use client'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import ButtonRegisterForm from './ButtonRegisterForm'

import facebooklogo from '@/public/facebook.png'
import xlogo from '@/public/xlogo.png'
import instagramlogo from '@/public/instagram.png'
import logo from '@/public/prestalogo.png'

import { toggleOpenConnectForm, toggleopenMenu } from '@/redux/features/displaySlice'

function Navbar() {
  const dispatch = useAppDispatch()

  const { openMenu } = useAppSelector(state => state.display)

  const handleClickConnect = () => {
    dispatch(toggleOpenConnectForm())
  }

  const handleClickMenu = () => {
    dispatch(toggleopenMenu())
  }

  const handleClickClose = () => {
    dispatch(toggleopenMenu())
  }

  return (
    <>

      <div className=' hidden md:flex md:justify-between w-full'>
      <div>
        <Image
          src={logo}
          alt='logo'
          width={100}
          height={200}
        />
      </div>
        <nav className=''>
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
            <li>
              <ButtonRegisterForm/>
            </li>
            <li>
              <button onClick={handleClickConnect}>SE CONNECTER</button>
              
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

      <div className="md:hidden space-y-2 hover:cursor-pointer flex justify-between w-full" onClick={handleClickMenu}>
      <div>
        <Image
          src={logo}
          alt='logo'
          width={100}
          height={200}
        />
      </div>
      <div className='space-y-2 hover:cursor-pointer'>

        <div className={`w-8 h-0.5 bg-[#3961AA] transform transition duration-300 ease-in-out ${false ? 'rotate-45 translate-y-2.5' : ''}`}></div>
        <div className={`w-8 h-0.5 bg-[#3961AA] transition duration-300 ease-in-out ${false ? 'opacity-0' : ''}`}></div>
        <div className={`w-8 h-0.5 bg-[#3961AA] transform transition duration-300 ease-in-out ${false ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
      </div>
      </div>

    {openMenu &&
    <div className={`fixed inset-0 bg-black flex flex-col gap-8 justify-center items-center z-50 p-2 text-[#3961AA] text-lg transform ${openMenu ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-100 ease-in-out`}>
      <button className='absolute top-2 right-2 border border-[#3961AA] p-2 rounded-xl hover:bg-white/80 hover:text-[#3961AA] font-bold duration-300' onClick={()=> console.log('yo')}>
        Déconnection
      </button>
      <button className='absolute top-2 left-2 border border-[#3961AA] p-2 rounded-xl hover:bg-white/80 hover:text-[#3961AA] font-bold duration-300' onClick={handleClickClose}>
        Fermer
      </button>


      <nav className=''>
          <ul className='flex flex-col gap-2'>
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
            <li>
              <ButtonRegisterForm/>
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
    }
      
    </>
  )
}

export default Navbar