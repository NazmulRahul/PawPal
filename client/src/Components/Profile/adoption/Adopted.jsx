import React, { useEffect, useState } from "react";
import { userPostedAnimals } from "./userPostedAnimals";
import ProfileAdoptionCard from "./ProfileAdoptionCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { user } from "@/Store/Auth";
import { getAllPosts } from "@/Store/AdoptionPostSlice";
import { toast } from "sonner";

const Adopted = () => {
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

  const adoptedList = adoptionInfo?.filter(pet => pet.userId === profileId && pet.isAdopted)?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  console.log(adoptedList, 'list')
  const showDelete =  profileId === userData?.userId;
  console.log(showDelete)
  return (
    <div className="flex flex-col justify-start gap-6 mt-4">
      <div className="flex w-full justify-start items-center">
        <h6 className="text-[#565656] font-montserrat text-sm">
          {adoptedList.length} pets found furr-ever home
        </h6>
      </div>
      {adoptedList.length?adoptedList.map((adoptedPost) => (
        <ProfileAdoptionCard
          key={adoptedPost.id}
          {...adoptedPost}
          showDelete={showDelete}
        />
      )): null}
    </div>
  );
};

export default Adopted;
