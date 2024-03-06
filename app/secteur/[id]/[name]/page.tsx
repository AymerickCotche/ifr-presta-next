'use client'

import Image from "next/image"
import { Montserrat } from 'next/font/google'
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { getPrestasByActivity } from "@/redux/features/prestaSlice";

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Page({params: { id, name },}: {params: { id: string, name: string }}) {

  const dispatch = useAppDispatch()

  const { prestas } = useAppSelector(state=> state.presta)

  useEffect(() => {
    const fetchPrestas = async () => {
      await dispatch(getPrestasByActivity({id}))

    }
    fetchPrestas()
  }, [])

  return (
    <main className=" flex-1 bg-gradient-to-b from-black  to-[#3961AA] to-40% ">
      <h1 className={`${montserrat.className} text-white text-center font-semibold pt-4 mb-4`}>TROUVER UN BOSS DU {name.toUpperCase()}</h1>
      <div className="p-4">
        <ul className="grid grid-cols-2">
          {prestas.map(presta => (
            <li key={presta.id}>
              <div className="border rounded p-4 bg-white">
                <h3>{presta.name}</h3>
                <p>{presta.email}</p>
                <p>{presta.phone}</p>
                <p>{presta.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
