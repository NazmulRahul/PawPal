import React from "react";
import ProfileAdoptionCard from "./ProfileAdoptionCard";
import { userAdoptedAnimals } from "./userAdoptedAnimals";

const UserAdopted = () => {
  const list = userAdoptedAnimals.posts.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  const showDelete = false
  return (
    <div className="flex flex-col justify-start gap-6 mt-4">
      <div className="flex w-full justify-start items-center">
        <h6 className="text-[#565656] font-montserrat text-sm">
          {list.length} pets adopted
        </h6>
      </div>
      {list.map((pet) => (
        <ProfileAdoptionCard key={pet.id} {...pet} showDelete={showDelete}/>
      ))}
    </div>
  );
};

export default UserAdopted;
