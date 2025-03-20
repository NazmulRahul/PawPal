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