import { House, Mail, MessageCircle, Phone } from "lucide-react";
import React from "react";


const UserInfo = ({user}) => {
  const {name, email, phone, location } = user;
  console.log(name, email, phone, location)
  const isActive = true
  return (
    <section className="w-ful p-6 rounded-lg shadow-xl bg-[#F2EED9] border-2 border-[#8C7A3F]">
      <h2 className="text-4xl font-bold">Owner/Rescuer Info:</h2>
      <div className="flex justify-between items-center mt-8">
        <div className="flex justify-start items-center gap-4">
          <h2 className="text-3xl font-semibold">{name}</h2>
          <div
            className={`${
              isActive
                ? "bg-green-200 text-green-500"
                : ""
            } px-6 py-2 rounded-full flex justify-center items-center text-xs font-semibold`}
          >
            <ul className={`${isActive? 'list-disc': null}`}>
              <li>{isActive ? "Active" : null}</li>
            </ul>
          </div>
        </div>

        <button className="flex items-center bg-[#c9c19c] rounded-md px-6 py-2 font-semibold">
          <MessageCircle /> Send Message
        </button>
      </div>
      <div className="flex justify-start gap-12 items-center mt-8 text-lg text-[#565656] font-bold">
        <div className="flex justify-start gap-1 items-center">
          <Phone/> <h3>{phone}</h3>
        </div>
        <div className="flex justify-start gap-1 items-center">
          <Mail /> <h3>{email}</h3>
        </div>
      </div>
      <div className="flex justify-start gap-1 items-center mt-4 text-lg text-[#565656] font-bold">
      <House /> <h3>{location}</h3>
      </div>
    </section>
  );
};

export default UserInfo;
