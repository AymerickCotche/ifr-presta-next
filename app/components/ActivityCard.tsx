'use client'

import { Activity } from '@/redux/features/activitySlice'
import Image from 'next/image'
import React from 'react'

import logo from '@/public/wip.png'
import Link from 'next/link'

interface Props {
  activity: Activity
}

function ActivityCard({activity}: Props) {
  return (

      <Link
        className=' relative w-full h-64 rounded-xl overflow-hidden shadow-xl'
        href={`/secteur/${activity.id}/${activity.name}`}
      >
          <Image
            src='https://picsum.photos/400/600?grayscale'
            alt={`Random image for ${activity.name}`}
            sizes='100vw'
            fill
            style={{objectFit: "cover"}}
            
          />
        <div className=' relative w-full h-full bg-black/50'>

          <span className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>{activity.name}</span>
        </div>
      </Link>
  )
}

export default ActivityCard
