import React from "react";
import { useParams } from "react-router-dom";

const ProfileHeader = ({ userInfo }) => {
  const { userId } = useParams();
  console.log(userId);
  const currentDate = new Date().toLocaleString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour12: true,
    timeZone: "Asia/Dhaka",
  });

  console.log(currentDate);
  return (
    <div>
      {/* <h2 className="text-4xl font-semibold font-montserrat">
        {userId ? (
          <span> Welcome to {userInfo?.username}'s pet-loving space</span>
        ) : (
          <p>Greetings, {userInfo?.username} </p>
        )}
      </h2>

      <h5 className="text-[#565656]">{userInfo?.email}</h5> */}

      <div className="flex flex-start items-center gap-2">
        <h2 className="text-4xl font-semibold font-montserrat">{userInfo.username}</h2>
        <h5 className="text-[#565656]">{userInfo.email}</h5>
      </div>

      <h4 className="text-lg text-[#565656] font-montserrat">{currentDate}</h4>
    </div>
  );
};

export default ProfileHeader;
