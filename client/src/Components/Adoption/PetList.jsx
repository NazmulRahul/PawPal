import React, { useEffect } from 'react'
import PetAdoptionCard from './PetAdoptionCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts, getStatus, selectAllPosts } from '@/Store/AdoptionPostSlice'
import { useSearchParams } from 'react-router-dom'

const PetList = () => {
  const dispatch = useDispatch()
  const allPets = useSelector(selectAllPosts)
  console.log(allPets)
  const status = useSelector(getStatus)
  const [searchParams, setSearchParams] = useSearchParams()
  
  // const filteredPets = allPets.filter(pet => pet.userId === "681f94001e6d69bdafe33676")
  // console.log(filteredPets, "filtered")
  const selectedTypes = searchParams.get('animalType')?.split(',') || []
  const selectedBreed = searchParams.get('breed')?.split(',') || [];
  const selectedRegion = searchParams.get('region')?.split(',') || [];
  const hasFilterApplied = selectedTypes.length !== 0 || Boolean(selectedBreed) || Boolean(selectedRegion)
  const filter = {selectedTypes, selectedBreed, selectedRegion}
  console.log(filter, 'filter')

  const filteredPets = allPets.filter(pet => {
  const matchType = selectedTypes.length === 0 || selectedTypes.includes(pet.animalType);
  const matchBreed = selectedBreed.length === 0 || selectedBreed.includes(pet.breed);
  const matchRegion = selectedRegion.length === 0 || selectedRegion.includes(pet.address.city);

  return matchType && matchBreed && matchRegion;
});

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch])
  return (
    <main className='px-10 grid grid-cols-4 gap-x-4 gap-y-8 pt-10 shadow-xs pb-8 mb-10'>
      {
        filteredPets?.length ?
        (filteredPets.map(pet => (
          <PetAdoptionCard key={pet._id} {...pet}/>
        ))):hasFilterApplied? <h1 className='font-bold text-4xl'>No match found</h1> : <h1 className='font-bold text-4xl'>Loading...</h1>
      }
    </main>
  )
}

export default PetList