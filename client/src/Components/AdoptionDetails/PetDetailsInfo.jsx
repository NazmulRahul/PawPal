import React from "react";
import { pets } from "../Adoption/pets";
import { Link, useParams } from "react-router-dom";
import { ClipboardCheck, MapPin, Pencil, ShieldCheck, ShieldX } from "lucide-react";
import { Separator } from "../ui/separator";

// {
//   id: 3,
//   size: "Chonky",
//   name: "Lalu",
//   Description: "A tiny Persian kitten with a fluffy golden coat. Loves cuddling and sleeping in warm spots.",
//   gender: "Male",
//   sterilized: false,
//   age: "5 months",
//   breed: "Orange",
//   medical_history: {
//     rabies: false,
//     flu: false,
//     dewormed: true,
//   },
//   further_medical_history: "Had mild digestive issues but recovered after diet adjustment.",
//   weight: 1.8,
//   imageUrl: "https://res.cloudinary.com/dr6pjobzl/image/upload/v1742402843/breed-spotlight-scottish-fold-min_cvquwn.webp",
//   type: "Cat",
// }

const PetDetailsInfo = ({name, description, postId, sex, animalType, age, breed, createdAt, updatedAt, userId, vaccine, address }) => {   
  return (
    <section className="w-ful p-6 rounded-lg shadow-xl bg-[#F2EED9] border-2 border-[#8C7A3F] max-h-[440px] overflow-y-auto custom-scrollbar">
      <div className="flex justify-between items-center">
        <h2 className="gloria-hallelujah-regular text-5xl">{name}</h2>
        <Link to={`../adoption/request?petId=${postId}`}>
          <Pencil />
        </Link>
      </div>
      <div className="flex justify-start gap-7 items-center text-2xl font-semibold mt-8">
        <h3>{breed}</h3>
        <div className="flex justify-start gap-1 items-center">
          <MapPin/>
          <h3>{address.location}</h3>
        </div>
      </div>
      <div>
        <ul className="flex justify-start gap-16 text-xl text-[#565656] mt-4 ml-5 list-disc">
          <li>{animalType}</li>
          <li>{'Chonky'}</li>
          <li>{sex.charAt(0).toUpperCase()+sex.slice(1)}</li>
          <li>{age<1? `${(age*10*12)/10} Months`: `${age} Years`}</li>
          <li>{'1'}Kg</li>
        </ul>
      </div>
      <Separator className={'bg-[#8C7A3F] my-2'}/>
      <h3 className="text-xl font-semibold">About {name}</h3>
      <ul className="list-disc ml-5 mt-2">
        <li>{description}</li>
      </ul>
      <div className="flex justify-start items-center gap-4 mt-4 text-xl font-semibold">
        <div className="flex items-center justify-start ">
          {vaccine.sterilized? <ClipboardCheck color="#48bb78"/> : <ShieldX color="#EF5350"/>}<h4>Sterilized</h4>
        </div>
        <div className="flex items-center justify-start ">
          {vaccine.fluVanccine? <ShieldCheck color="#48bb78"/> : <ShieldX color="#EF5350"/>} <h4>Flu Vaccine</h4>
        </div>
        <div className="flex items-center justify-start">
          {vaccine.rabiesVaccine? <ShieldCheck color="#48bb78"/> : <ShieldX color="#EF5350"/>}<h4>Rabies Vaccine</h4>
        </div>      
        <div className="flex items-center justify-start">
          {vaccine.dewormed? <ShieldCheck color="#48bb78"/> : <ShieldX color="#EF5350"/>}<h4>Dewormed</h4>
        </div>      
      </div>
      <Separator className={'bg-[#8C7A3F] my-2'}/>
      <h3 className="text-xl font-semibold">More Medical history:</h3>
      <ul className="mt-2 list-disc ml-5">
        <li>{'No problemo'}</li>
      </ul>
    </section>
  );
};

export default PetDetailsInfo;
