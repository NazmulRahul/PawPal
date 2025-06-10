import React, { useState } from "react";
import ProfileUserInfoData from "./ProfileUserInfoData";
import ProfileUserForm from "./ProfileUserForm";

const ProfileUserInfo = () => {
  const styles = {
    label: "font-semibold",
    text: "font-montserrat text-gray-600 text-sm",
  };
  const [inEdit, setInEdit] = useState(() => false);
  return (
    <main className="p-10 font-inter w-full overflow-y-auto">
      {!inEdit ? <ProfileUserInfoData styles={styles} setInEdit={setInEdit} /> : <ProfileUserForm setInEdit={setInEdit}/>}
    </main>
  );
};

export default ProfileUserInfo;
