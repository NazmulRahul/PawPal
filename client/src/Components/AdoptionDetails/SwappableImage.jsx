import React from "react";
import dogChild from "../../assets/dog-child.webp";
import manCat from "../../assets/man-hugging-cat.jpg";
import tabbyCat from "../../assets/Tabby-Cat.jpg";
import wholesome from "../../assets/wholesome-pic.jpg";
import anotherKitten from "../../assets/another-kitten.jpg";

const SwappableImage = () => {
  const slides = [dogChild, manCat, tabbyCat, wholesome, anotherKitten];
  return (
    <main className="mt-30 flex justify-center items-center">
      <section className="relative w-[900px] h-[600px]">
        <div className="absolute left-0 right-[55%] bottom-4 h-[550px]">
          <img src={wholesome} alt="" className="min-w-full min-h-full object-cover"/>
          <div className="absolute z-10 inset-0 bg-black opacity-65"></div>
        </div>
        <div className="absolute right-0 left-[55%] bottom-4 h-[550px]">
          <img src={manCat} alt="" className="min-w-full min-h-full object-cover"/>
          <div className="absolute z-10 inset-0 bg-black opacity-65"></div>
        </div>
        <div className="absolute left-[15%] right-[15%] bottom-10 h-[550px] shadow-2xl z-50 rounded-md">
          <img src={dogChild} alt="" className="min-h-full min-w-full object-cover rounded-md"/>
        </div>
      </section>
    </main>
  );
};

export default SwappableImage;
