import { NextResponse } from 'next/server'

import prisma from "@/libs/prisma"

export const maxDuration = 10
export const revalidate = 0

export async function GET(){

  try {
      
    const users = await prisma.prestaActivity.findMany({
      orderBy: {
        name: "asc"
      }
    })

    return NextResponse.json(users)

  } catch (error) {
    return NextResponse.json(error, {status: 500, statusText: "error"})
  }

}