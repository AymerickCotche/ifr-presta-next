import { NextResponse, NextRequest } from 'next/server'
import { getServerSession } from "next-auth/next"

import prisma from "@/libs/prisma"
import { authOptions } from "@/libs/auth"

export const maxDuration = 10
export const revalidate = 0

export async function GET(request: NextRequest){

  const searchParams = request.nextUrl.searchParams
  const id = searchParams.get('activityId')

  try {

    const users = await prisma.prestaUser.findMany({
      where: {
        isAdmin: false,
        isValidate: true,
        activityId: id
      },
      orderBy: {
        createdAt: "desc"
      }
    })

    return NextResponse.json(users)

  } catch (error) {
    return NextResponse.json(error, {status: 500, statusText: "error"})
  }

}