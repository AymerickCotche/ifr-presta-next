'use client'

import { connectUser, setConnForm, toggleOpenConnectForm } from '@/redux/features/displaySlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import React from 'react'

function ConnForm() {
  const dispatch = useAppDispatch()

  const { connForm, loading, message } = useAppSelector(state => state.display)

  const handleSetInput = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>) => {

    const { name, value } = e.currentTarget

    if (name === "email" || name === "password") {
      dispatch(setConnForm({name, value}))
    }
  }

  const handleClose = () => {
    dispatch(toggleOpenConnectForm())
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    
    e.preventDefault()

    await dispatch(connectUser({formdata: connForm}))
  }

  return (

    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
      
      <form action='submit' className='bg-white p-6 rounded border shadow-lg w-1/2 flex flex-col gap-2'>
        <div className=' text-right'>
          <button className=' w-auto border-2 border-[#3961AA] rounded p-2 mt-2 hover:bg-red-400 hover:text-white duration-200' onClick={handleClose}>
            Fermer
          </button>
        </div>

        <div className=' flex flex-col gap-1 '>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" className=' border-2 border-[#3961AA] rounded p-2' onChange={handleSetInput} value={connForm.email}/>
        </div>

        <div className=' flex flex-col gap-1 '>
          <label htmlFor="password">Mot de passe</label>
          <input type="password" name="password" id="password" className=' border-2 border-[#3961AA] rounded p-2' onChange={handleSetInput} value={connForm.password}/>
        </div>

        <button className=' border-2 border-[#3961AA] rounded p-2 mt-2 hover:bg-[#3961AA] hover:text-white duration-200' onClick={handleSubmit}>
          {loading &&
            <span>...</span>
          }

          {!loading &&
          
          <span>Envoyer</span>}
        </button>
      </form>
    </div>
  )
}

export default ConnForm