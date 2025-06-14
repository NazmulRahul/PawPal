import React, { useEffect, useState } from "react";
import ProfileAdoptionCard from "./ProfileAdoptionCard";
import { userAdoptedAnimals } from "./userAdoptedAnimals";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllPosts } from "@/Store/AdoptionPostSlice";
import { user } from "@/Store/Auth";

const UserAdopted = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const userData = useSelector(user);
  const profileId = userId? userId : userData?.userId;
  const [adoptionInfo, setAdoptionInfo] = useState([]);

  useEffect(() => {
    const getAdoptionInfo = async () => {
      try {
        const response = await dispatch(getAllPosts());
        setAdoptionInfo(response?.payload?.posts);
      } catch (error) {
        toast.error('Failed to get adoption data', {duration:3000})
        setAdoptionInfo([])
      }
    };
    getAdoptionInfo();
  }, [dispatch]);

  const userAdoptedList = adoptionInfo?.filter(pet => pet.adoptedBy === profileId && pet.isAdopted)?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  console.log(userAdoptedList)
  const list = userAdoptedAnimals.posts.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  return (
    <div className="flex flex-col justify-start gap-6 mt-4">
      <div className="flex w-full justify-start items-center">
        <h6 className="text-[#565656] font-montserrat text-sm">
          {userAdoptedList.length} pets adopted
        </h6>
      </div>
      {userAdoptedList.length ? userAdoptedList?.map((pet) => (
        <ProfileAdoptionCard key={pet.id} {...pet} showDelete={false}/>
      )): null}
    </div>
  );
};

export default UserAdopted;
