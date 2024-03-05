import { NextResponse } from 'next/server'
import { getServerSession } from "next-auth/next"

import prisma from "@/libs/prisma"
import { authOptions } from "@/libs/auth"

export const maxDuration = 10
export const revalidate = 0

export async function POST(request:Request) {

  try {

    const body = await request.json();
    
    const session = await getServerSession(authOptions)

    if (session && session.user.isAdmin) {

      const user = await prisma.prestaUser.update({
        where: {
          id: body.id
        },
        data: {
          email: body.email,
          name: body.name,
          phone: body.phone,
          description: body.description,
          activityId: body.activityId,
          isValidate: body.isValidate
        }
      })

      return NextResponse.json(user)

    } else if(session && !session.user.isAdmin){
      if (session.user.id !== body.id) {
        return NextResponse.json("You can't edit this user",{status: 403, statusText: "error"})
      } else {
        const user = await prisma.prestaUser.update({
          where: {
            id: body.id
          },
          data: {
            email: body.email,
            name: body.name,
            phone: body.phone,
            description: body.description,
            activityId: body.activityId,
          }
        })
  
        return NextResponse.json(user)
      }
    } else {
      return NextResponse.json("User not signed in or not admin",{status: 403, statusText: "error"})
    }

  } catch (error) {
    return NextResponse.json(error, {status: 500, statusText: "error"})
  }

}