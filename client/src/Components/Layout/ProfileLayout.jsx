import React from 'react'
import ProfileHeader from '../Profile/ProfileHeader'
import Footer from '../Home/Footer'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { user } from '@/Store/Auth'
import ProfileNavbar from '../Profile/ProfileNavbar'
import ProfilePicture from '../Profile/ProfilePicture'
import fallback from '../../assets/defaultAvatar.png'
import displayPicture from '../../assets/beckham.jpg'
import ProfileSidebar from '../Profile/ProfileSidebar'

const ProfileLayout = () => {
  const userInfo = useSelector(user)
  return (
    <main>
      <div className="px-14">
        <ProfileHeader userInfo={userInfo} />
        <ProfileNavbar />
        <section className="flex border-2 border-t-0 border-[#8C7A3F] bg-[#F2EED9] min-h-[76vh] max-h-[76vh] overflow-y-scroll">
          {/* <ProfilePicture displayPicture={displayPicture} fallback={fallback} /> */}
          <ProfileSidebar/>
          <Outlet />
        </section>
      </div>
      <Footer/>
    </main>
  );
}

export default ProfileLayout


// "flex border-2 border-t-0 border-[#8C7A3F] bg-[#F2EED9] min-h-[76vh] max-h-[76vh] overflow-y-scroll"