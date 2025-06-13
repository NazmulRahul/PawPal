import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { user } from "@/Store/Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import getUserDetailsWithId from "./getUserDetailsWithId";

const ProfileUserInfoData = ({styles}) => {
  const userData = useSelector(user);

  const [userInfo, setUserInfo] = useState(userData);

  const {userId} = useParams();
  console.log(userId)

  useEffect(() => {
    const getUserData = async () => {
      console.log('inside getUserData')
      if (userId) {
        console.log('inside userId')
        const data = await getUserDetailsWithId(userId);
        setUserInfo(data)
      }
    };
    console.log('inside useEffect')
    getUserData()
  }, [userId]);
  return (
    <div>
      <section className="flex w-full justify-center items-center">
        <Label className={"font-semibold underline"}>Contact Info</Label>
      </section>
      <div className="grid grid-cols-3 mt-8 gap-y-6">
        <section className="flex justify-start items-center gap-x-1">
          <Mail size={20}/>
          <p className={styles.text}>{userInfo?.user?.email || "Update your mail"}</p>
        </section>
        <section className="flex justify-start items-center gap-x-1">
          <Building2 size={20} />
          <p className={styles.text}>{userInfo?.user?.city || "Update your city"}</p>
        </section>
        <section className="flex justify-start items-center gap-x-1">
          <MapPin size={20}/>
          <p className={styles.text}>{userInfo?.user?.location || "Update your location"}</p>
        </section>
        <section className="flex justify-start items-center gap-x-1">
          <Phone size={20} />
          <p className={styles.text}>{userInfo?.user?.phone || "Update your phone"}</p>
        </section>
        <section className="flex justify-start items-center gap-x-1">
          <FontAwesomeIcon icon="fa-brands fa-facebook" />
          <p className={styles.text}>{userInfo?.user?.facebook || "Provide your Facebook Link"}</p>
        </section>
        <section className="flex justify-start items-center gap-x-1">
          <FontAwesomeIcon icon="fa-brands fa-instagram" />
          <p className={styles.text}>{userInfo?.user?.instagram || "Provide your instagram Link"}</p>
        </section>
        <section className="flex justify-start items-center gap-x-1">
          <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
          <p className={styles.text}>{userInfo?.user?.twitter || "Provide your X Link"}</p>
        </section>
      </div>
      <section className="flex w-full justify-center items-center">
        <Label className={"font-semibold underline mt-8"}>About User</Label>
      </section>
      <section className="mt-8">
        <Label htmlFor={"bio"} id={"bio"} className={styles.label}>
          Bio
        </Label>
        <p className={styles.text}>
          {userInfo?.user?.bio || "Tell us about yourserlf"}
        </p>
      </section>
    </div>
  );
};

export default ProfileUserInfoData;
