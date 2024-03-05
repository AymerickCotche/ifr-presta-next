'use client'

import { getActivities } from '@/redux/features/activitySlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import React, { useEffect } from 'react'
import ActivityCard from './ActivityCard'

function Activities() {

  const dispatch = useAppDispatch()

  const { activities } = useAppSelector(state => state.activity)

  useEffect(() => {
    const fetchActivities = async () => {
      await dispatch(getActivities())
    }

    fetchActivities()

  }, [dispatch])

  return (
    <div className='grid grid-cols-2 gap-4'>
      {activities.map(activity => (
        <ActivityCard
          key={activity.id}
          activity={activity}
        />
      ))}

{activities.map(activity => (
        <ActivityCard
          key={activity.id}
          activity={activity}
        />
      ))}

{activities.map(activity => (
        <ActivityCard
          key={activity.id}
          activity={activity}
        />
      ))}
    </div>
  )
}

export default Activities
