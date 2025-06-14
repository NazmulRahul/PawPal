import React, { useEffect, useState } from "react";
import ProfileHeader from "../Profile/ProfileHeader";
import Footer from "../Home/Footer";
import { Outlet, useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { user } from "@/Store/Auth";
import ProfileNavbar from "../Profile/ProfileNavbar";
import fallback from "../../assets/defaultAvatar.png";
import displayPicture from "../../assets/beckham.jpg";
import ProfileSidebar from "../Profile/ProfileSidebar";
import getUserDetailsWithId from "../Profile/user/getUserDetailsWithId";

const ProfileLayout = () => {
  const userData = useSelector(user);

  const [userInfo, setUserInfo] = useState(userData);

  const {userId} = useParams();
  console.log(userId)

  useEffect(() => {
    const getUserData = async () => {
      console.log('inside getUserData')
      if (userId) {
        console.log('inside userId')
        const data = await getUserDetailsWithId(userId);
        setUserInfo(data)
      }
    };
    console.log('inside useEffect')
    getUserData()
  }, [userId]);

  return (
    <main>
      <div className="px-14">
        <ProfileHeader userInfo={userInfo} />
        <ProfileNavbar userInfo={userInfo}/>
        <section className="flex border-2 border-t-0 border-[#8C7A3F] bg-[#F2EED9] min-h-[76vh] max-h-[76vh] overflow-y-scroll">
          {/* <ProfilePicture displayPicture={displayPicture} fallback={fallback} /> */}
          <ProfileSidebar userInfo={userInfo} />
          <Outlet />
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default ProfileLayout;

// "flex border-2 border-t-0 border-[#8C7A3F] bg-[#F2EED9] min-h-[76vh] max-h-[76vh] overflow-y-scroll"
