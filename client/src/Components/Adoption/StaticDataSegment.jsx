import React, { useState } from "react";
import dogChild from "../../assets/dog-child.webp";
import dogMan from "../../assets/wholesome-pic.jpg";
import manCat from "../../assets/man-hugging-cat.jpg";
import tabbyCat from "../../assets/Tabby-Cat.jpg";
import { Card, CardContent } from "../ui/card";
import { ArrowRight } from "lucide-react";
import { adoptionFormControls } from "../config";
import CommonForm from "../Utils/CommonForm";
import Slideshow from "./SlideShow";
import { useSearchParams } from "react-router-dom";
import handleFilterChange from "./utils/handleFilterChange";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

const initialFormData = {
  breed: "",
  region: "",
};

const StaticDataSegment = () => {
  console.log("full page refresh");
  const [tempFormData, setTempFormData] = useState(() => initialFormData);
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(tempFormData, 'temp form data')
  const onSubmit = (e) => {
    e.preventDefault();
    if (tempFormData.breed !== "") {
      handleFilterChange(setSearchParams, "breed", tempFormData.breed);
    }
    if (tempFormData.region !== "") {
      handleFilterChange(setSearchParams, "region", tempFormData.region);
    }
    setTempFormData(initialFormData);
  };

  const slides = [dogChild, manCat, tabbyCat, dogMan];

  const selectedTypes = searchParams.get("animalType")?.split(",") || [];
  const selectedBreed = searchParams.get("breed")?.split(",") || [];
  const selectedRegion = searchParams.get("region")?.split(",") || [];
  //const filter = { selectedTypes, selectedBreed, selectedRegion };
  //console.log(filter, 'filter')

  const styles = {
    selectTrigger: `w-full bg-[#F2EED9] hover:bg-[#e4d1cd] border-[#8C7A3F] ${
      !selectedTypes.length
        ? "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-60"
        : null
    }`,
    selectContent: "bg-[#F2EED9] border-[#8C7A3F]",
    selectItem: "focus:bg-[#e4d1cd]",
    input: "bg-[#F2EED9] outline-[#fffae6] border-[#8C7A3F]",
    button: "mt-4",
  };
  const petType = ["cat", "dog", "rabbit", "bird"].map((pet) => {
    const isSelected = selectedTypes?.includes(pet);
    return (
      // <button className="w-20 h-14 text-2xl bg-card">{pet}</button>
      <Card
        key={pet}
        className={`w-22 flex justify-center items-center ${
          !isSelected
            ? "bg-[#F2EED9] hover:bg-[#e4d1cd]"
            : "bg-[#e4d1cd] hover:bg-[#d6b9b3] font-bold"
        }  border-[#8C7A3F] `}
        onClick={() => handleFilterChange(setSearchParams, "animalType", pet)}
      >
        <CardContent>
          <p className="text-xl">
            {pet.charAt(0).toUpperCase() + pet.slice(1) + "s"}
          </p>
        </CardContent>
      </Card>
    );
  });

  const isSelectDisabled = selectedTypes
    ? Boolean(selectedTypes.length)
    : Boolean(selectedTypes);

  let uniqueBreeds;
  // console.log(getControlItem.options, 'get Control Item')

  if (selectedTypes && selectedTypes.length !== 0) {
    const selectedBreedLists = adoptionFormControls[0]?.options
      ?.filter((pet) => selectedTypes.includes(pet.petType))
      ?.flatMap((pet) => pet.breed);

    // Step 3: Deduplicate if needed
    uniqueBreeds = Array.from(new Set(selectedBreedLists));
  }
  return (
    <main className="mt-35">
      <section className="flex justify-center gap-6">
        <Slideshow slides={slides} />

        {/* <img
          src={dogChild}
          alt=""
          width={750}
          className="shadow-2xl rounded-2xl object-cover"
        /> */}
        <div className="w-[650px]">
          <h2 className="mt-4 text-5xl font-bold break-words">
            A Paw-some Companion is Just a Click Away!
          </h2>
          <h4 className="mt-2 text-3xl break-words">
            Save a Life and Gain a Loyal Companion
          </h4>
          <h5 className="mt-6 text-2xl font-semibold">Pet Type:</h5>
          {/* <div className="mt-2 flex gap-4">{petType}</div> */}
          <div className="mt-2 flex justify-between items-end">
            <section className="flex gap-4">{petType}</section>
            <button
              className="text-lg underline hover:font-semibold"
              onClick={() => {
                setSearchParams({});
                setTempFormData(initialFormData);
              }}
            >
              Clear All Filters
            </button>
          </div>
          <section className="mt-3">
            <form onSubmit={onSubmit} className="flex flex-col gap-1.5">
              <section className="grid w-full gap-1">
                <Label
                  htmlFor={"breed"}
                  id={"breed"}
                >
                  Breed
                </Label>
                <Select
                  onValueChange={(value) =>
                    setTempFormData({
                      ...tempFormData,
                      breed: value,
                    })
                  }
                  value={tempFormData.breed}
                  id={"breed"}
                  name={"breed"}
                  disabled={!isSelectDisabled}
                >
                  <SelectTrigger className={styles.selectTrigger}>
                    <SelectValue
                      placeholder={adoptionFormControls[0]?.placeholder}
                    />
                  </SelectTrigger>
                  <SelectContent className={styles.selectContent}>
                    {selectedTypes && selectedTypes.length !== 0
                      ? uniqueBreeds.map((breed) => (
                          <SelectItem
                            key={breed}
                            value={breed}
                            className={styles.selectItem}
                          >
                            {selectedBreed.includes(breed) ? (
                              <span className="font-semibold">{breed}</span>
                            ) : (
                              breed
                            )}
                          </SelectItem>
                        ))
                      : null}
                  </SelectContent>
                </Select>
              </section>

              <section className={"flex flex-col gap-0.5"}>
                <Label
                  htmlFor={"region"}
                  id={"region"}
                >
                  Region
                </Label>
                <Select
                  onValueChange={(value) =>
                    setTempFormData({ ...tempFormData, region: value })
                  }
                  value={tempFormData.region}
                  id={"region"}
                  name={"region"}
                >
                  <SelectTrigger className={styles.selectTrigger}>
                    <SelectValue
                      placeholder={adoptionFormControls[1]?.placeholder}
                    />
                  </SelectTrigger>
                  <SelectContent className={styles.selectContent}>
                    {adoptionFormControls[1]?.options.map((district) => (
                      <SelectItem
                        key={district.id}
                        value={district.name}
                        className={styles.selectItem}
                      >
                        {selectedRegion.includes(district.name) ? (
                          <span className="font-semibold">{district.name}</span>
                        ) : (
                          district.name
                        )}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </section>
              <section>
                <Button className={'mt-4 w-full'}>
                  {<>
                    <div className="flex justify-center items-center gap-1">
                      <p>Start your search</p> <ArrowRight />
                    </div>
                  </>}
                </Button>
              </section>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
};

export default StaticDataSegment;
