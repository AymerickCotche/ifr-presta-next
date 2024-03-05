import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from "next-auth/next"
import * as bcrypt from 'bcrypt'

import prisma from "@/libs/prisma"
import { authOptions } from "@/libs/auth"


interface RequestBody {
  name: string
  email: string
  password: string
  phone: string
  description: string
  isAdmin: boolean 
  activityId: string
}

export async function POST(request:Request){

  const session = await getServerSession(authOptions)
  const body = await request.json()

  if (session && session.user.isAdmin) {
    const user = await prisma.prestaUser.create({
      data:{
        email:body.email,
        name: body.name,
        password: await bcrypt.hash(body.password, 10),
        phone: body.phone,
        description: body.description,
        isAdmin: body.isAdmin,
        activityId: body.activityId,
        isValidate: body.isValidate
      },
    })
  
    const {password, ... userWithoutPass} = user
  
    const result = {
      ...userWithoutPass,
    }
    
    return NextResponse.json(result, {status: 200})

  } else {

    const user = await prisma.prestaUser.create({
      data:{
        email:body.email,
        name: body.name,
        password: await bcrypt.hash(body.password, 10),
        phone: body.phone,
        description: body.description,
        isAdmin: false,
        activityId: body.activityId,
        isValidate: false
      },
    })
  
    const {password, ... userWithoutPass} = user
  
    const result = {
      ...userWithoutPass,
    }
    
    return NextResponse.json(result, {status: 200})
  }
  
}