import React from 'react'

const SingleChat = ({
  id,body,userName, isAdmin, createdAt
}) => {
  const time = new Date(createdAt).toLocaleString('en-GB', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  hour12: true,
  timeZone: 'Asia/Dhaka',
});

const isCurrentUser = true

  return (
    <main className={`flex flex-col justify-start ${isAdmin ? 'items-end' : 'items-start'} gap-1 mt-2`}>
      <div className={`flex justify-end items-center gap-2`}>
        <h2 className='font-inter text-lg font-semibold'>{userName}</h2>
        <span className='text-[#565656] text-xs'>{time}</span>
      </div>
      <p>{body}</p>
    </main>
  )
}

export default SingleChat