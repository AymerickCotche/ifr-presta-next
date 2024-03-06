'use client'

import { useAppSelector } from '@/redux/hooks'
import React from 'react'
import RegisterForm from './RegisterForm'
import ConnForm from './ConnForm'

function ModalHandler() {
  const { openRegisterForm, openConnectForm } = useAppSelector(state => state.display)
  return (
    <div>
      {openRegisterForm &&
        <RegisterForm/>
      }
      {openConnectForm &&
        <ConnForm/>
      }
    </div>
  )
}

export default ModalHandler