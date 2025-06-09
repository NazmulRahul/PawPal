import React, { useState } from "react";
import { Button } from "../ui/button";
import PasswordChangeForm from "./user/PasswordChangeForm";
import { toast } from "sonner";

const ProfilePicture = ({ fallback, displayPicture }) => {
  const [isEdit, setIsEdit] = useState(() => false);

	const onAction = (formData) => {
		const data = Object.fromEntries(formData);
		if(data.new === data.confirm){
			toast.error('Passwords did not match', {duration: 3000, description:'Please try again'})
		} else {
			toast.success('Updated Succesfully', {duration:3000})
		}
		setIsEdit(false)
	}

  
  return (
    <div className={`p-10 border-2 border-t-0 border-l-0 border-b-0 border-[#8C7A3F] flex flex-col justify-between`}>
      <div className="relative rounded-md shadow-xl">
        <img
          src={displayPicture}
          alt={fallback}
          className="w-[320px] h-[280px] object-cover rounded-md"
        />
        <button className="absolute bottom-0 right-0 left-0 flex justify-center items-center bg-[#c9c19c] p-2 rounded-t-[100%] hover:bg-[#e4d1cd] hover:font-semibold active:font-bold">
          <span className="font-inter">Upload Photo</span>
        </button>
      </div>
      {isEdit ? <PasswordChangeForm onAction={onAction}/> : null}
      {!isEdit ? (
        <Button
          onClick={() => setIsEdit(true)}
          className={`w-full bg-[#c9c19c] hover:bg-[#e4d1cd] hover:font-bold active:font-bold text-black font-semibold`}
        >
          {isEdit ? "Confirm" : "Change"} Password
        </Button>
      ) : null}
    </div>
  );
};

export default ProfilePicture;
