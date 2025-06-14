import React from "react";
import { userPostedAnimals } from "./userPostedAnimals";
import ProfileAdoptionCard from "./ProfileAdoptionCard";

const Pending = () => {
  const pendingList = userPostedAnimals.posts
    .filter((pet) => !pet.isAdopted)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const showDelete = true;
  return (
    <div className="flex flex-col justify-start gap-6 mt-4">
      <div className="flex w-full justify-start items-center">
        <h6 className="text-[#565656] font-montserrat text-sm">
          {pendingList.length} pets looking for furr-ever home
        </h6>
      </div>
      {pendingList.map((pendingPost) => (
        <ProfileAdoptionCard key={pendingPost.id} {...pendingPost} showDelete={showDelete} />
      ))}
    </div>
  );
};

export default Pending;
