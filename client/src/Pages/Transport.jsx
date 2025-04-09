import HeroSegment from '@/Components/Transport/HeroSegment'
import React from 'react'
import WorkProcedure from '@/Components/Transport/WorkProcedure'
import Services from '@/Components/Transport/Services'

const Transport = () => {
  return (
    <div className='w-full h-full flex flex-col overflow-y-scroll scrollbar-hidden'>
      <HeroSegment/>
      <WorkProcedure/>
      <Services/>
    </div>
  )
}

export default Transport
