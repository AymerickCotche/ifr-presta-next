'use client'

import { useAppSelector } from '@/redux/hooks'
import React from 'react'
import RegisterForm from './RegisterForm'

function ModalHandler() {
  const { openRegisterForm } = useAppSelector(state => state.display)
  return (
    <div>
      {openRegisterForm &&
        <RegisterForm/>
      }
    </div>
  )
}

export default ModalHandler