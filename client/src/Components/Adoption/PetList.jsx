import React, { useEffect } from 'react'
import PetAdoptionCard from './PetAdoptionCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts, getStatus, selectAllPosts } from '@/Store/AdoptionPostSlice'

const PetList = () => {
  const dispatch = useDispatch()
  const allPets = useSelector(selectAllPosts)
  const status = useSelector(getStatus)
  
  const filteredPets = allPets.filter(pet => pet.userId === "681f94001e6d69bdafe33676")
  console.log(filteredPets, "filtered")

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch])
  return (
    <main className='px-10 grid grid-cols-4 gap-x-4 gap-y-8 pt-10 shadow-xs pb-8 mb-10'>
      {
        filteredPets?.length ?
        (filteredPets.map(pet => (
          <PetAdoptionCard key={pet.id} {...pet}/>
        ))): <h1 className='font-bold text-4xl'>Loading...</h1>
      }
    </main>
  )
}

export default PetList