import React, { useState } from "react";
import dogChild from "../../assets/dog-child.webp";
import dogMan from '../../assets/wholesome-pic.jpg'
import manCat from "../../assets/man-hugging-cat.jpg";
import tabbyCat from "../../assets/Tabby-cat.jpg";
import { Card, CardContent } from "../ui/card";
import { ArrowRight } from "lucide-react";
import { adoptionFormControls } from "../config";
import CommonForm from "../Utils/CommonForm";
import Slideshow from "./SlideShow";

const initialFormData = {
  breed: "",
  region: "",
};

const StaticDataSegment = () => {
  console.log('full page refresh')
  const [tempFormData, setTempFormData] = useState(() => initialFormData);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(tempFormData);
    setTempFormData(initialFormData);
  };

  const onAction = (formData) => {
    const data = Object.fromEntries(formData);
    console.log(data);
    console.log(tempFormData);
  };

  const slides = [dogChild, manCat, tabbyCat, dogMan]

  const styles = {
    selectTrigger: "w-full bg-[#F2EED9] hover:bg-[#e4d1cd] border-[#8C7A3F]",
    selectContent: 'bg-[#F2EED9] border-[#8C7A3F]',
    selectItem: "focus:bg-[#e4d1cd]",
    input: "bg-[#F2EED9] outline-[#fffae6] border-[#8C7A3F]",
    button: "mt-4",
  };
  const petType = ["Cats", "Dogs", "Others"].map((pet) => (
    // <button className="w-20 h-14 text-2xl bg-card">{pet}</button>
    <Card
      key={pet}
      className={`w-22 flex justify-center items-center bg-[#F2EED9] border-[#8C7A3F] hover:bg-[#e4d1cd]`}
    >
      <CardContent>
        <p className="text-xl">{pet}</p>
      </CardContent>
    </Card>
  ));

  return (
    <main className="mt-35">
      <section className="flex justify-center gap-6">
        <Slideshow slides={slides}/>
        
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
          <div className="mt-2 flex gap-4">{petType}</div>
          <section className="mt-3">
            <CommonForm
              formControls={adoptionFormControls}
              buttonText={
                <>
                  <div className="flex justify-center items-center gap-1">
                    <p>Start your search</p> <ArrowRight />
                  </div>
                </>
              }
              formData={tempFormData}
              setFormData={setTempFormData}
              onAction={onAction}
              //onSubmit={onSubmit}
              styles={styles}
            />
          </section>
        </div>
      </section>
    </main>
  );
};

export default StaticDataSegment;
