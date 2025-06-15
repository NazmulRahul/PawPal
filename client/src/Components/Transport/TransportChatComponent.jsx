import React, { useEffect, useState } from "react";
import { getChats } from "./api";
import ChatList from "./ChatList";
import ChatBox from "./ChatBox";
import { useDispatch, useSelector } from "react-redux";
import { getAllChats, selectAllChats } from "@/Store/Chat";

const TransportChatComponent = ({ postId, userData }) => {
  //const [allChats, setAllChats] = useState({});
  const allChats = useSelector(selectAllChats);
  const dispatch = useDispatch();
  useEffect(() => {
    const getChats = async () => {
      const response = await dispatch(getAllChats(postId));
      console.log(response);
    };
    getChats();
  }, [dispatch, postId]);
  console.log(allChats, "chats");
  return (
    <section className="w-ful p-6 rounded-lg shadow-xl bg-[#F2EED9] border-2 border-[#8C7A3F] flex flex-col justify-between">
      {allChats?.length ? (
        <div>
          <ChatList allChats={allChats} postId={postId} userData={userData} />
        </div>
      ) : (
        <h3>No chat with admin found</h3>
      )}
      <ChatBox dispatch={dispatch} postId={postId} userData={userData} />
    </section>
  );
};

export default TransportChatComponent;
