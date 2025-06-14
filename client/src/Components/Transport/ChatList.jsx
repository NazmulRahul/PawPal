import React from 'react'
import SingleChat from './SingleChat'

const ChatList = ({allChats}) => {
  console.log(allChats)
  return (
    <div className='min-h-[360px] max-h-[360px] overflow-y-scroll scrollbar-hidden'>
      {allChats.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      ).map(singleChat => <SingleChat key={singleChat.id} {...singleChat}/>)}
      
    </div>
  )
}

export default ChatList