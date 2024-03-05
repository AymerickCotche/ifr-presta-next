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
                orderBy: {
                    createdAt: "desc"
                }
            })

            return NextResponse.json(users)

        } else {
            return NextResponse.json("User not signed in or not admin",{status: 403, statusText: "error"})
        }

    } catch (error) {
        return NextResponse.json(error, {status: 500, statusText: "error"})
    }

}