import React, { useEffect, useState } from "react";
import { getChats } from "./api";
import ChatList from "./ChatList";
import ChatBox from "./ChatBox";

const TransportChatComponent = () => {
  const [allChats, setAllChats] = useState({});
  useEffect(() => {
    const getAllChats = async () => {
      const response = await getChats();
      setAllChats(response);
    };
    getAllChats();
  }, []);
  console.log(allChats, "chats");
  return (
    <>
      {allChats.length ? (
        <section className="w-ful p-6 rounded-lg shadow-xl bg-[#F2EED9] border-2 border-[#8C7A3F] flex flex-col">
          <div>
            <ChatList allChats={allChats} />
          </div>
          <ChatBox/>
        </section>
      ) : <h3>No chat with admin found</h3>}
    </>
  );
};

export default TransportChatComponent;
