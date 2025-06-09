import React, { useState } from "react";
import ProfileUserInfoData from "./ProfileUserInfoData";
import { Button } from "@/Components/ui/button";
import ProfileUserForm from "./ProfileUserForm";

const ProfileUserInfo = () => {
  const styles = {
    label: "font-semibold",
    text: "font-montserrat text-gray-600 text-sm",
  };
  const [inEdit, setInEdit] = useState(() => false);
  return (
    <main className="p-10 font-inter w-full max-h-[80vh] overflow-y-auto">
      {!inEdit ? <ProfileUserInfoData styles={styles} /> : <ProfileUserForm/>}
      <div className="flex justify-center items-center">
        <Button
          className={`bg-[#c9c19c] hover:bg-[#e4d1cd] hover:font-bold active:font-bold text-black font-semibold mt-8`}
          onClick={() =>setInEdit(prev => !prev)}
        >
          Edit
        </Button>
      </div>
    </main>
  );
};

export default ProfileUserInfo;
