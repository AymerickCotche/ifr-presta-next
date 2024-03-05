import { NextResponse } from 'next/server'
import { getServerSession } from "next-auth/next"

import prisma from "@/libs/prisma"
import { authOptions } from "@/libs/auth"

export const maxDuration = 300
export const revalidate = 0

export async function GET(){

  try {
      
    const session = await getServerSession(authOptions)

    if (session && session.user.isAdmin) {
      const users = await prisma.prestaUser.findMany({
        where: {
          isAdmin: false,
          isValidate: true,
        },
        orderBy: {
          createdAt: "desc"
        }
      })

      return NextResponse.json(users)

    } 

  } catch (error) {
    return NextResponse.json(error, {status: 500, statusText: "error"})
  }

}