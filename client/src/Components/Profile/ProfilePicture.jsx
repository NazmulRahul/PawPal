import React, { useRef, useState } from "react";
import { Button } from "../ui/button";
import PasswordChangeForm from "./user/PasswordChangeForm";
import { toast } from "sonner";
import { imageUploadHandler } from "../Adoption/utils/imageUploadHandler";
import { Input } from "../ui/input";

const ProfilePicture = ({ fallback, displayPicture }) => {
  const [isEdit, setIsEdit] = useState(() => false);
  const fileInputRef = useRef(null)
  const [photoURL, setPhotoURL] = useState(null);

  console.log(photoURL, "photo")

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];

    if (!file || !file.type.startsWith("image/")) {
      toast.error("Please select a valid image file");
      return;
    }

    try {
      toast('Uploading photo...')
      const uploadedUrl = await imageUploadHandler(file)

      if(!uploadedUrl) throw new Error("No URL returned from upload")
      setPhotoURL(uploadedUrl)
      toast.success("Photo uploaded successfully", { duration: 3000 });
    } catch (error) {
      toast.error("Upload failed", {
        duration: 3000,
        description: error?.message || "Something went wrong",
      });
    }
  }

	const onAction = (formData) => {
		const data = Object.fromEntries(formData);
    console.log(data.new, data.confirm)
		if(data.new !== data.confirm){
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
          alt={'profile-picture'}
          className="w-[320px] h-[280px] object-cover rounded-md"
        />

        <Input
          ref={fileInputRef}
          id="profile-photo"
          name="photo"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        <button type="button" onClick={handleUploadClick} className="absolute bottom-0 right-0 left-0 flex justify-center items-center bg-[#c9c19c] p-2 rounded-t-[100%] hover:bg-[#e4d1cd] hover:font-semibold active:font-bold">
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
