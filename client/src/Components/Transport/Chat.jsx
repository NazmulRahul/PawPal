import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EmojiPicker from 'emoji-picker-react'
import { useDispatch } from 'react-redux'
import { io } from 'socket.io-client'

const Chat = () => {
    const [isShowEmoji, setIsShowEmoji]=useState(false)
    const [message, setMessage]=useState('')
    const ENDPOINT ="http://localhost:3000"
    const [socket, setSocket]=useState(null);
    const [flag, setFlag]=useState(true)
    const dispatch = useDispatch()
    const [id , setId]=useState(null)
    
    useEffect(()=>{
        // id=dispatch() // thunk to get the chat id 
    },[])
    useEffect(()=>{
        setSocket(io(ENDPOINT));
        
      },[])
    useEffect(()=>{
        if(flag && socket && id){
            socket.emit('user', currentUser)
            socket.emit('join room',id);
            console.log('user room joining ')
            // dispatch(); // getMessagesByChat({id})
            setFlag(false);
        }
    },[flag, socket, id])
    const handleMessageUpload = ()=>{
        const newContent = {message,chatID:id, senderID:currentUser.id}
        socket.emit('new message',newContent)
        // dispatch(uploadMessagesByChat({data:message, id, }));
        setMessage('')
      }
      
      useEffect(()=>{
          if(socket){
            socket.on('message received',(newMessage)=>{
            //   dispatch(appendMessage({
            //     content:newMessage.message,
            //     chatRef:newMessage.chatID,
            //    _id:newMessage._id,
            //     sender:newMessage.senderID
    
            //   }))
            })
          }
          return ()=>{
            if(socket)socket.off('message received');
          }
      })
  return (
    <div className='w-full h-[500px] bg-amber-500 flex flex-col justify-start items-center'>
      <div className="pb-5 w-full h-[85%] flex flex-col gap-4 px-6 overflow-y-scroll scrollbar-hidden ">
        <div className="w-full flex-1 bg-amber-800"></div>
        {/* {
          currentChatMessages.length?
            currentChatMessages.map((item)=><SingleMessageComponent key={item._id} item={item}/>)
          :null
        } */}
        {/* <div ref={scrollRef}/> */}
      </div>
      <div className="w-full h-auto flex justify-start pl-5">
        <div className=" relative overflow-y-scroll">
          {isShowEmoji?<EmojiPicker className='absolute' style={{width:'300px', height:'350px'}}/>:null}
        </div>
        </div>
      <div className=" px-4 relative gap-2 flex justify-center items-center w-[98%] h-12 rounded-full bg-transparent border-[1px] border-neutral-400">
          <FontAwesomeIcon onClick={()=>setIsShowEmoji(!isShowEmoji)} className=' cursor-pointer text-xl' icon="fa-regular fa-face-smile" />
          <input 
            className='pl-4 h-full rounded-full bg-transparent text-white outline-none flex-1' 
            placeholder='Message...'
            type="text"
            value={message}
            onChange={(e)=>setMessage(e.target.value)} 
            />
            {
              message?
                <button onClick={handleMessageUpload} className='text-blue-600 font-semibold'>Send</button>
              :<div className='flex w-20 justify-between'>
                  <FontAwesomeIcon className=' cursor-pointer text-xl' icon="fa-solid fa-microphone" />
                  <FontAwesomeIcon className=' cursor-pointer text-xl' icon="fa-regular fa-image" />
                  <FontAwesomeIcon className='cursor-pointer text-xl' icon="fa-regular fa-heart" />
              </div>
            }
      </div>
      
    </div>
  )
}

export default Chat
