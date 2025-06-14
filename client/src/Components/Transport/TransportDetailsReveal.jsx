import React, { useEffect, useState } from "react";
import TransportCarousel from "./TransportCarousel";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSingleTransportById } from "@/Store/Transport";
import { toast } from "sonner";
import { Heading1 } from "lucide-react";
import TransportDeatilsInfo from "./TransportDeatilsInfo";
import TransportUserDetailsInfo from "./TransportUserDetailsInfo";
import TransportChatComponent from "./TransportChatComponent";

const TransportDetailsReveal = () => {
  const [allTransportData, setAllTransportData] = useState({});
  const { postId } = useParams();
  console.log(postId, "postId");
  const dispatch = useDispatch();

  useEffect(() => {
    const getTransportData = async () => {
      try {
        const response = await dispatch(getSingleTransportById(postId));
        if (response?.payload?.userId) setAllTransportData(response?.payload);
      } catch (error) {
        toast.error("Something went wrong");
      }
    };
    getTransportData();
  }, [dispatch, postId]);
  console.log(allTransportData, "alltransportdata");

  return allTransportData ? (
    <div className="flex flex-col h-full w-full overflow-y-scroll scrollbar-hidden bg-[#fffae6] pt-36 px-14">
      <div className="w-full flex items-center justify-center">
        <TransportCarousel
          image1={allTransportData?.document?.sitting}
          image2={allTransportData?.document?.standing}
        />
      </div>

      <section className="grid grid-cols-2 gap-3 mt-10 mb-40">
        <div className="flex flex-col gap-4">
          <TransportDeatilsInfo {...allTransportData}/>
          <TransportUserDetailsInfo {...allTransportData}/>
        </div>
        <TransportChatComponent/>
      </section>
    </div>
  ) : (
    <h1>Loading Data....</h1>
  );
};

export default TransportDetailsReveal;
