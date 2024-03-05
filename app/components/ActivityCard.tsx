'use client'

import { Activity } from '@/redux/features/activitySlice'
import Image from 'next/image'
import React from 'react'

import logo from '@/public/wip.png'

interface Props {
  activity: Activity
}

function ActivityCard({activity}: Props) {
  return (

      <div className=' relative w-full h-64 rounded-xl overflow-hidden shadow-xl'>
        <Image
          src='https://picsum.photos/400/600?grayscale'
          alt={`Random image for ${activity.name}`}
          sizes='100vw'
          fill
          style={{objectFit: "cover"}}
          
        />
        <span className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>{activity.name}</span>
      </div>
  )
}

export default ActivityCard
