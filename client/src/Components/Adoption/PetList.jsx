import React from 'react'
import { pets } from './pets'
import PetAdoptionCard from './PetAdoptionCard'

const PetList = () => {
  return (
    <main className='px-10 grid grid-cols-4 gap-x-4 gap-y-8 pt-10 shadow-2xl pb-8 mb-10'>
      {
        pets.map(pet => (
          <PetAdoptionCard key={pet.id} {...pet}/>
        ))
      }
    </main>
  )
}

export default PetList