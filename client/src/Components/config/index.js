export const adoptionFormControls = [
  {
    name: 'breed',
    label: 'Breed',
    placeholder: 'Husky, Persian etc..',
    componentType: 'select',
    options: [
      {id:'null', label: "."},
      {id:'husky', label: 'Husky'},
      {id:'persian', label: 'Persian'},
      {id:'scottish-fold', label: 'Scottish Fold'},
    ]
  },
  {
    name: "region",
    label: "Region",
    placeholder: "Enter your postal code",
    componentType: "input",
    type: "text",
  }
]

export const adoptionRequestFormControls = [
  {
    name: 'animalType',
    label: 'Pet Type',
    placeholder: 'Cat, Dog, Parrot etc....',
    componentType: 'input',
    type: 'text'
  },
  {
    name: 'breed',
    label: 'Breed',
    placeholder: 'Scottish fold, Huskey etc...',
    componentType: 'input',
    type: 'text'
  },
  {
    name: 'name',
    label: 'Name'
  }
]

export const petTypeBreeds = [
  {
    petType: 'cat',
    breed: [
      'Regular', 'Persian', 'Siamese', 'British Shorthair', 'Scottish Fold', 'Mixed', 'Others'
    ]
  },
  {
    petType: 'dog',
    breed: [
      'Regular', 'German Shepherd', 'Labardor Retriever', 'Bulldog', 'Chihuahua', 'Huskey', 'Mixed', 'Others'
    ]
  },
  {
    petType: 'bird',
    breed: ['Parrot', 'Oriental magpie-robin', 'Kingfisher', 'Cuckoos', 'Myna', 'Others']
  },
  {
    petType: 'rabbit',
    breed: ['Dutch Lops', 'Lionheads', 'Mini Rex', 'Others']
  },
]