import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { petTypeBreeds } from "../config";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Textarea } from "../ui/textarea";
import { useSearchParams } from "react-router-dom";
import { pets } from "./pets";

const PetDetailsForm = () => {
  const [formPetType, setFormPetType] = useState("");
  const [formPetBreed, setFormPetBreed] = useState("");
  const [formPetGender, setFormPetGender] = useState("");
  const [initialized, setInitialized] = useState(false)

  const petDetails = petTypeBreeds;

  const [searchParams, setSearchParams] = useSearchParams()

  const petId = searchParams.get("petId");
  console.log(petId, "petId")

  const petList = pets;
  console.log(petList)

  const {name,
    id,
    size,
    description,
    gender,
    sterilized,
    age,
    breed,
    medical_history,
    further_medical_history,
    weight,
    type,} = petId? petList.find((pet) => pet.id === Number(petId)) : {};

    const onPetTypeChange = value => {
      setFormPetType(value)
      setFormPetBreed("")
    }

  //console.log(name, id, size, description, gender, sterilized, age, breed, medical_history, further_medical_history, weight, type)
  

  useEffect(() => {
    if (type != null)   setFormPetType(type);
    if (breed != null)  setFormPetBreed(breed);
    if (gender != null) setFormPetGender(gender);
    setInitialized(true)
  }, [gender, type, breed])

  console.log(formPetType, formPetBreed, formPetGender)
  const styles = {
    selectTrigger: "w-full bg-[#F2EED9] hover:bg-[#e4d1cd] border-[#8C7A3F]",
    selectContent: "bg-[#F2EED9] border-[#8C7A3F]",
    selectItem: "focus:bg-[#e4d1cd]",
    input: "bg-[#F2EED9] outline-[#fffae6] border-[#8C7A3F]",
    button: "mt-4",
    label: "font-semibold mb-1",
  };

  const onAction = (formData) => {
    const data = Object.fromEntries(formData);
    console.log(data);
  };
  console.log('page rendered')
  return (
    <form action={onAction} className="grid w-full mt-7 gap-4">
      <section className="grid grid-cols-2 gap-3">
        <div>
          <Label htmlFor="animalType" className={styles.label}>
            Pet Type
          </Label>
          <Select
            id="animalType"
            name="animalType"
            value={formPetType ?? ""}
            onValueChange={initialized?(value) => onPetTypeChange(value):undefined}
          >
            <SelectTrigger className={styles.selectTrigger}>
              <SelectValue placeholder="Cat, Dog etc..." />
            </SelectTrigger>
            <SelectContent className={styles.selectContent}>
              {petDetails.map((pet) => (
                <SelectItem
                  value={pet.petType}
                  key={pet.petType}
                  className={styles.selectItem}
                >
                  {pet.petType.charAt(0).toUpperCase() + pet.petType.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="breed" className={styles.label}>
            Breed
          </Label>
          <Select id="breed" name="breed" value={formPetBreed?? ""} onValueChange={initialized?(value) => setFormPetBreed(value):null}>
            <SelectTrigger className={styles.selectTrigger}>
              <SelectValue placeholder="Persian, Serbian Huskey etc..." />
            </SelectTrigger>
            <SelectContent className={styles.selectContent}>
              {petDetails
                .find((pet) => formPetType === pet.petType)
                ?.breed.map((breedName) => (
                  <SelectItem
                    value={breedName}
                    key={breedName}
                    className={styles.selectItem}
                  >
                    {breedName}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-3">
        <div>
          <Label htmlFor="name" className={styles.label}>
            Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Minty, Kaju etc..."
            defaultValue={name}
            className={styles.input}
          />
        </div>
        <div>
          <Label htmlFor="age" className={styles.label}>
            Age
          </Label>
          <Input
            id="age"
            name="age"
            placeholder="Enter age in years. Example:0.25yr is equivalent to 3months"
            defaultValue={age}
            className={styles.input}
          />
        </div>
        <div>
          <Label htmlFor="sex" className={styles.label}>
            Gender
          </Label>
          <Select id="sex" name="sex" value={formPetGender??""} onValueChange={initialized?value => setFormPetGender(value):undefined}>
            <SelectTrigger className={styles.selectTrigger}>
              <SelectValue placeholder={"Male/Female"} />
            </SelectTrigger>
            <SelectContent className={styles.selectContent}>
              <SelectItem value="male" className={styles.selectItem}>
                Male
              </SelectItem>
              <SelectItem value="female" className={styles.selectItem}>
                Female
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      <Label className={"font-semibold text-md"}>Medical Info:</Label>
      <section className="grid grid-cols-5 bg-[#F2EED9] p-2 rounded-md shadow-xs border-[#8C7A3F] border-[0.5px]">
        <div className="flex items-center gap-1">
          {/* <Checkbox id="sterilized" name="sterilized" className={'border-2 border-[#8C7A3F] data-[state=checked]:bg-[#3b361f] data-[state=unchecked]:bg-[#ebe8db]'}/> */}
          <input type="checkbox" id="sterilized" defaultChecked={sterilized} name="sterilized"/>
          <Label className={styles.label}>Sterilized</Label>
        </div>
        <div className="flex items-center gap-1">
          {/* <Checkbox id="flu" name="fluVaccine" className={'border-2 border-[#8C7A3F] data-[state=checked]:bg-[#3b361f] data-[state=unchecked]:bg-[#ebe8db]'}/> */}
          <input type="checkbox" id="flu" defaultChecked={medical_history?.flu} name="fluVaccine"/>
          <Label className={styles.label}>Flu Vaccine</Label>
        </div>
        <div className="flex items-center gap-1">
          {/* <Checkbox id="rabies" name="rabiesVaccine" className={'border-2 border-[#8C7A3F] data-[state=checked]:bg-[#3b361f] data-[state=unchecked]:bg-[#ebe8db]'}/> */}
          <input type="checkbox" id="rabies" defaultChecked={medical_history?.rabies} name="rabiesVaccine"/>
          <Label className={styles.label}>Rabies Vaccine</Label>
        </div>
        <div className="flex items-center gap-1">
          {/* <Checkbox id="dewormed" name="dewormed" className={'border-2 border-[#8C7A3F] data-[state=checked]:bg-[#3b361f] data-[state=unchecked]:bg-[#ebe8db]'}/> */}
          <input type="checkbox" id="dewormed" defaultChecked={medical_history?.dewormed} name="dewormed"/>
          <Label className={styles.label}>Dewormed</Label>
        </div>
      </section>

      <section>
        <Label htmlFor="description" className={styles.label}>
          Description
        </Label>
        <Textarea id='description' name='description' defaultValue={description} className={"bg-[#F2EED9] border-[#8C7A3F]"} />
      </section>

      <section>
        <Label htmlFor="location" className={styles.label}>Location</Label>
        <Input id="location" name="location" placeholder="Topobon R/A, Akhaliya, Sylhet" className={styles.input}/>
      </section>

      <Button>Submit</Button>
    </form>
  );
};

export default PetDetailsForm;
