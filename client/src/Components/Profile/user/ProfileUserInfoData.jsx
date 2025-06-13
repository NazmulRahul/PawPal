import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const ProfileUserInfoData = ({styles}) => {
  return (
    <div>
      <section className="flex w-full justify-center items-center">
        <Label className={"font-semibold underline"}>Contact Info</Label>
      </section>
      <div className="grid grid-cols-3 mt-8 gap-y-6">
        <section className="flex justify-start items-center gap-x-1">
          <Mail size={20}/>
          <p className={styles.text}>test@gmail.com</p>
        </section>
        <section className="flex justify-start items-center gap-x-1">
          <Building2 size={20} />
          <p className={styles.text}>Chattogram</p>
        </section>
        <section className="flex justify-start items-center gap-x-1">
          <MapPin size={20}/>
          <p className={styles.text}>Topobon R/A, Akhaliya, Sylhet</p>
        </section>
        <section className="flex justify-start items-center gap-x-1">
          <Phone size={20} />
          <p className={styles.text}>+8801711234567</p>
        </section>
        <section className="flex justify-start items-center gap-x-1">
          <FontAwesomeIcon icon="fa-brands fa-facebook" />
          <p className={styles.text}>https://www.facebook.com/1010</p>
        </section>
        <section className="flex justify-start items-center gap-x-1">
          <FontAwesomeIcon icon="fa-brands fa-instagram" />
          <p className={styles.text}>https://www.instagram.com/1010</p>
        </section>
        <section className="flex justify-start items-center gap-x-1">
          <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
          <p className={styles.text}>https://www.x.com/1010</p>
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
          Paws-itively obsessed with furballs 🐾 | Professional treat dispenser
          🍖 | Seeking a four-legged soulmate to share belly rubs & Netflix
          marathons 🎬🐶 | Fluent in Meow, Woof, and Baby Talk 😹 | Warning: May
          spontaneously adopt all the animals.
        </p>
      </section>
    </div>
  );
};

export default ProfileUserInfoData;
