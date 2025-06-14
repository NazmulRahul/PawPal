import { user } from '@/Store/Auth'
import { getUserTransport, getUserTransportDeatils } from '@/Store/Transport'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProfileTransportCard from './ProfileTransportCard'

const ProfileTransportCompleted = () => {
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

  const completeList = singleUserTransportList?.filter(transport => transport.isApproved && transport.isComplete)
  console.log(completeList, 'completeList')
  const showDelete = true
  return (
    <div className="flex flex-col justify-start gap-6 mt-4">
      <div className="flex w-full justify-start items-center">
        <h6 className="text-[#565656] font-montserrat text-sm">
          {completeList?.length} pets have completed their journey
        </h6>
      </div>
      {completeList.length?completeList.map((post) => (
        <ProfileTransportCard
          key={post._id}
          {...post}
          showDelete={true}
          completeObject={post}
          dispatch={dispatch}
        />
      )): null}
    </div>
  )
}

export default ProfileTransportCompleted