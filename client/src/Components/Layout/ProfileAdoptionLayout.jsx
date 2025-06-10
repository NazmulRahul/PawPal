import React from "react";
import ProfileAdoptionNavbar from "../Profile/adoption/ProfileAdoptionNavbar";
import { Outlet } from "react-router-dom";

const ProfileAdoptionLayout = () => {
  return (
    <main className="p-10 font-inter w-full max-h-[70vh] overflow-y-auto custom-scrollbar">
      <ProfileAdoptionNavbar />
      <Outlet />
    </main>
  );
};

export default ProfileAdoptionLayout;
