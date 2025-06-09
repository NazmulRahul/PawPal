import { Label } from "@/Components/ui/label";
import React from "react";

const ProfileUserInfoData = ({styles}) => {
  return (
    <div>
      <section className="flex w-full justify-center items-center">
        <Label className={"font-semibold underline"}>
          Personal Information
        </Label>
      </section>
      <div className="grid grid-cols-4 mt-8">
        <section>
          <Label htmlFor={"username"} id={"username"} className={styles.label}>
            Username
          </Label>
          <p className={styles.text}>Test user</p>
        </section>
        <section>
          <Label
            htmlFor={"firstName"}
            id={"firstName"}
            className={styles.label}
          >
            First Name
          </Label>
          <p className={styles.text}>Test</p>
        </section>
        <section>
          <Label htmlFor={"lastName"} id={"lastName"} className={styles.label}>
            Last Name
          </Label>
          <p className={styles.text}>User</p>
        </section>
        <section>
          <Label htmlFor={"dob"} id={"dob"} className={styles.label}>
            Date of birth
          </Label>
          <p className={styles.text}>01/01/2001</p>
        </section>
      </div>
      <section className="flex w-full justify-center items-center mt-8">
        <Label className={"font-semibold underline"}>Contact Info</Label>
      </section>
      <div className="grid grid-cols-3 mt-8 gap-y-6">
        <section>
          <Label htmlFor={"email"} id={"email"} className={styles.label}>
            Email address
          </Label>
          <p className={styles.text}>test@gmail.com</p>
        </section>
        <section>
          <Label htmlFor={"phone"} id={"phone"} className={styles.label}>
            Phone no.
          </Label>
          <p className={styles.text}>+8801711234567</p>
        </section>
        <section>
          <Label htmlFor={"address"} id={"address"} className={styles.label}>
            Address
          </Label>
          <p className={styles.text}>Topobon R/A, Akhaliya, Sylhet</p>
        </section>
        <section>
          <Label htmlFor={"facebook"} id={"facebook"} className={styles.label}>
            Facebook
          </Label>
          <p className={styles.text}>https://www.facebook.com/1010</p>
        </section>
        <section>
          <Label
            htmlFor={"instagram"}
            id={"instagram"}
            className={styles.label}
          >
            Instagram
          </Label>
          <p className={styles.text}>https://www.instagram.com/1010</p>
        </section>
        <section>
          <Label htmlFor={"whatsapp"} id={"whatspp"} className={styles.label}>
            Whatsapp no.
          </Label>
          <p className={styles.text}>+8801711234567</p>
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
