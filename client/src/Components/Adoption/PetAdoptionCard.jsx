import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const PetAdoptionCard = ({
  name,
  imageUrl,
  type,
  gender,
  breed,
  size,
  age,
  weight,
  id
}) => {
  const petBreed =
    breed.length > 9 ? breed.substring(0, 8).concat("..") : breed;
  return (
    <Link to={`${id}`}>
      <main className="group bg-[#F2EED9] hover:bg-[#e4d1cd] rounded-tl-xl rounded-tr-xl shadow-md">
        <div className="relative rounded-tl-xl rounded-tr-xl flex flex-col">
          <img
            src={imageUrl}
            alt=""
            className="h-66 w-100 rounded-tl-xl rounded-tr-xl object-cover"
          />
          <div className="absolute right-0 left-0 bottom-0 flex flex-col py-2 justify-center bg-[#F2EED9] items-center rounded-t-full group-hover:bg-[#e4d1cd]">
            <h1 className="text-2xl gloria-hallelujah-regular">{name}</h1>
          </div>
        </div>
        <div className="flex justify-between items-center gap-8 text-lg font-normal px-8 mt-4">
          <h3>{gender}</h3>
          <h3>{petBreed}</h3>
          <h3>{size}</h3>
        </div>
        <div className="flex mt-4 font-3xl font-semibold gap-1 px-8 items-center justify-start pb-4">
          <MapPin />
          <h3>Akhaliya, Sylhet</h3>
        </div>
      </main>
    </Link>
  );
};

export default PetAdoptionCard;
