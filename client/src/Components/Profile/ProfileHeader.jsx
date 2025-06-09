import React from "react";

const ProfileHeader = ({ username }) => {
  const currentDate = new Date().toLocaleString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour12: true,
    timeZone: "Asia/Dhaka",
  });

  console.log(currentDate)
  return (
    <div>
      <h2 className="text-4xl font-semibold font-montserrat">
        Greetings, {username}
      </h2>
      <h4 className="text-lg text-gray-600 font-montserrat">{currentDate}</h4>
    </div>
  );
};

export default ProfileHeader;
