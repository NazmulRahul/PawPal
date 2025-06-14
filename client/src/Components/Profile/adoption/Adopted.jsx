import React from "react";
import { userPostedAnimals } from "./userPostedAnimals";
import ProfileAdoptionCard from "./ProfileAdoptionCard";

const Adopted = () => {
  const adoptedList = userPostedAnimals.posts
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const showDelete = true
  return (
    <div className="flex flex-col justify-start gap-6 mt-4">
      <div className="flex w-full justify-start items-center">
        <h6 className="text-[#565656] font-montserrat text-sm">
          {adoptedList.length} pets found furr-ever home
        </h6>
      </div>
      {adoptedList.map((adoptedPost) => (
        <ProfileAdoptionCard key={adoptedPost.id} {...adoptedPost} showDelete={showDelete}/>
      ))}
    </div>
  );
};

export default Adopted;
