'use client'

import { toggleOpenRegisterForm } from "@/redux/features/displaySlice"
import { useDispatch } from "react-redux"

function ButtonRegisterForm() {
  const dispatch = useDispatch()

  const handleOpenRegisterForm = () => {
    dispatch(toggleOpenRegisterForm())
  }
  
  return (
    <button
      onClick={handleOpenRegisterForm}
    >
      FORMULAIRE D'ADHÉSION
    </button>
  )
}

export default ButtonRegisterForm