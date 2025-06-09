import ProfileLayout from '@/Components/Layout/ProfileLayout'
import React from 'react'

const Profile = () => {
  return (
    <div className="flex flex-col h-full w-full overflow-y-scroll scrollbar-hidden bg-[#EBE8DB] px-14 pt-32">
        <ProfileLayout/>
    </div>
  )
}

export default Profile