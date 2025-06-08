import PetList from '@/Components/Adoption/PetList'
import StaticDataSegment from '@/Components/Adoption/StaticDataSegment'
import React from 'react'

const AdminAdoptionView = () => {
  return (
    <div className="flex flex-col h-full w-full overflow-y-scroll scrollbar-hidden bg-[#EBE8DB] px-14">
        <StaticDataSegment/>
        <PetList/>
    </div>
  )
}

export default AdminAdoptionView