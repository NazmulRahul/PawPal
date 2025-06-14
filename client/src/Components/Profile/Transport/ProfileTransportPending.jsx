import { user } from '@/Store/Auth'
import { getUserTransport, getUserTransportDeatils } from '@/Store/Transport'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProfileTransportCard from './ProfileTransportCard'

const ProfileTransportPending = () => {
  const userData = useSelector(user)
  const dispatch = useDispatch()
  const singleUserTransportList = useSelector(getUserTransportDeatils)

  useEffect(() => {
    const getList = async () => {
      const data = await dispatch(getUserTransport(userData?.userId))
      console.log(data, 'inside get List')
    }
    getList()
  },[dispatch, userData?.userId])

  const pendingList = singleUserTransportList?.filter(transport => !transport?.isApproved && !transport?.isComplete)
  console.log(pendingList, 'pending list')
  return (
    <div className="flex flex-col justify-start gap-6 mt-4">
      <div className="flex w-full justify-start items-center">
        <h6 className="text-[#565656] font-montserrat text-sm">
          {pendingList?.length} waiting to be traveled
        </h6>
      </div>
      {pendingList.length?pendingList.map((post) => (
        <ProfileTransportCard
          key={post._id}
          {...post}
          showDelete={true}
          dispatch={dispatch}
          completeObject = {post}
        />
      )): null}
    </div>
  )
}

export default ProfileTransportPending