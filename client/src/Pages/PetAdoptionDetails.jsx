import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isNavBgWhite,
  scrollY,
  setIsNavBgWhite,
  setScrollY,
} from "../Store/Utils";
import SwappableImage from "@/Components/AdoptionDetails/SwappableImage";
import PetDetailsInfo from "@/Components/AdoptionDetails/PetDetailsInfo";
import CommentSection from "@/Components/AdoptionDetails/CommentSection";
import UserInfo from "@/Components/AdoptionDetails/UserInfo";
import { useParams } from "react-router-dom";
import { getPetDetailsWithId, getSinglePost } from "@/Store/AdoptionPostSlice";
import { toast } from "sonner";
import { user } from "@/Store/Auth";

const PetAdoptionDetails = () => {
  const petDetails = useSelector(getSinglePost);
  const { postId } = useParams();
  const scrollRef = useRef(null);
  const dispatch = useDispatch();
  const currentScrollY = useSelector(scrollY);
  const userData = useSelector(user)

  const handleScroll = () => {
    const scrollY = scrollRef.current.scrollTop;
    if (scrollY > currentScrollY) dispatch(setIsNavBgWhite(true));
    else if (scrollY < currentScrollY) dispatch(setIsNavBgWhite(false));
    dispatch(setScrollY(scrollY));
  };

  useEffect(() => {
    const fetchPetDetails = async (id) => {
      try {
        const detailedData = await dispatch(getPetDetailsWithId(postId))
        !detailedData?.payload?.post ? toast.error('Some error occured', {duration:2000}) : null;
      } catch (error) {
        console.log(error);
      }
    };
    fetchPetDetails(postId)
  }, [dispatch, postId]);

  return (
    <div
      ref={scrollRef}
      onScroll={handleScroll}
      className="flex flex-col h-full w-full overflow-y-scroll scrollbar-hidden bg-[#fffae6] px-14"
    >
      {petDetails ? (
        <>
          <SwappableImage slides={petDetails.image}/>
          <section className="grid grid-cols-2 gap-3 mt-10">
            <div className="flex flex-col gap-4">
              <PetDetailsInfo activeUserId={userData?.userId} {...petDetails} />
              <UserInfo user={petDetails.address} />
            </div>
            <CommentSection />
          </section>
        </>
      ) : (
        <h1 className="font-bold text-3xl">Loading...</h1>
      )}
    </div>
  );
};

export default PetAdoptionDetails;
