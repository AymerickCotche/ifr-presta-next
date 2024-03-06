'use client'

import { registerPresta, setRegisterForm, toggleOpenRegisterForm } from '@/redux/features/displaySlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import React from 'react'

function RegisterForm() {
  const dispatch = useAppDispatch()

  const { registerForm, loading, message } = useAppSelector(state => state.display)
  const { activities } = useAppSelector(state => state.activity)

  const handleSetInput = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>) => {

    const { name, value } = e.currentTarget

    if (name === "name" || name === "email" || name === "password" || name === "phone" || name === "description" || name === "activityId") {
      dispatch(setRegisterForm({name, value}))
    }
  }

  const handleClose = () => {
    dispatch(toggleOpenRegisterForm())
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    
    e.preventDefault()

    await dispatch(registerPresta({formdata: registerForm}))
  }

  return (

    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-20">
      
      <form action='submit' className='bg-white p-6 rounded border shadow-lg w-1/2 flex flex-col gap-2'>
        <div className=' text-right'>
          <button className=' w-auto border-2 border-[#3961AA] rounded p-2 mt-2 hover:bg-red-400 hover:text-white duration-200' onClick={handleClose}>
            Fermer
          </button>
        </div>

        <div className=' flex flex-col gap-1 '>
          <label htmlFor="name">Nom</label>
          <input type="text" name="name" id="name" className=' border-2 border-[#3961AA] rounded p-2' onChange={handleSetInput} value={registerForm.name}/>
        </div>

        <div className=' flex flex-col gap-1 '>
          <label htmlFor="activityId">Votre secteur d'activité</label>
          <select className=' border-2 border-[#3961AA] rounded p-2' name='activityId' id='activityId' onChange={handleSetInput} value={registerForm.activityId}>
            {activities.map(activity => (
              <option key={activity.id} value={activity.id}>{activity.name}</option>
            ))}

          </select>
        </div>

        <div className=' flex flex-col gap-1 '>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" className=' border-2 border-[#3961AA] rounded p-2' onChange={handleSetInput} value={registerForm.email}/>
        </div>

        <div className=' flex flex-col gap-1 '>
          <label htmlFor="phone">Téléphone</label>
          <input type="text" name="phone" id="phone" className=' border-2 border-[#3961AA] rounded p-2' onChange={handleSetInput} value={registerForm.phone}/>
        </div>

        <div className=' flex flex-col gap-1 '>
          <label htmlFor="password">Mot de passe</label>
          <input type="password" name="password" id="password" className=' border-2 border-[#3961AA] rounded p-2' onChange={handleSetInput} value={registerForm.password}/>
        </div>

        <div className=' flex flex-col gap-1 '>
          <label htmlFor="description">Descriptif de vos activités</label>
          <textarea name="description" id="description" className=' border-2 border-[#3961AA] rounded p-2' onChange={handleSetInput} value={registerForm.description}/>
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

export default RegisterForm