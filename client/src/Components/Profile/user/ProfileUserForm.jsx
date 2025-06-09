import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import React, { useState } from "react";

const initialData = {
  username: "",
  firstName: "",
  lastName: "",
  dob: "",
  email: "",
  phone: "",
  address: "",
  facebook: "",
  instagram: "",
  whatsapp: "",
  bio: "",
};

const ProfileUserForm = ({setInEdit}) => {
  const styles = {
    label: "font-semibold",
    text: "font-montserrat text-gray-600 text-sm",
    input:
      "bg-[#ebe8db] outline-[#fffae6] border-[#8C7A3F] cursor-pointer w-[34vh]",
    section: "flex flex-col gap-0.5",
  };

  const [formData, setFormData] = useState(initialData);
  
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setFormData(initialData)
  }

  const onCancel = () => {
    setFormData(initialData)
    setInEdit(false)
  }

  return (
    <form onSubmit={onSubmit}>
      <section className="flex w-full justify-center items-center">
        <Label className={"font-semibold underline"}>
          Personal Information
        </Label>
      </section>
      <div className="grid grid-cols-4 mt-8">
        <section className={styles.section}>
          <Label htmlFor={"username"} id={"username"} className={styles.label}>
            Username
          </Label>
          <Input
            id={"username"}
            name={"username"}
            placeholder={"John Doe"}
            value={formData.username}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, username: e.target.value }))
            }
            className={styles.input}
          />
        </section>
        <section className={styles.section}>
          <Label
            htmlFor={"firstName"}
            id={"firstName"}
            className={styles.label}
          >
            First Name
          </Label>
          <Input
            id={"firstName"}
            name={"firstName"}
            placeholder={"John"}
            value={formData.firstName}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, firstName: e.target.value }))
            }
            className={styles.input}
          />
        </section>
        <section className={styles.section}>
          <Label htmlFor={"lastName"} id={"lastName"} className={styles.label}>
            Last Name
          </Label>
          <Input
            id={"lastName"}
            name={"lastName"}
            placeholder={"Doe"}
            value={formData.lastName}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, lastName: e.target.value }))
            }
            className={styles.input}
          />
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
        <section className={styles.section}>
          <Label htmlFor={"email"} id={"email"} className={styles.label}>
            Email address
          </Label>
          <Input
            id={"email"}
            name={"email"}
            placeholder={"johndoe@gmail.com"}
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            className={styles.input}
            type={"email"}
          />
        </section>
        <section className={styles.section}>
          <Label htmlFor={"phone"} id={"phone"} className={styles.label}>
            Phone no.
          </Label>
          <Input
            id={"phone"}
            name={"phone"}
            placeholder={"+01712345678"}
            value={formData.phone}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, phone: e.target.value }))
            }
            className={styles.input}
            type={"tel"}
            inputMode={"numeric"}
            pattern="^\+?[0-9]{11}$"
          />
        </section>
        <section className={styles.section}>
          <Label htmlFor={"address"} id={"address"} className={styles.label}>
            Address
          </Label>
          <Input
            id={"address"}
            name={"address"}
            placeholder={"Topobon R/A, Akhaliya, Sylhet"}
            value={formData.address}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, address: e.target.value }))
            }
            className={styles.input}
          />
        </section>
        <section className={styles.section}>
          <Label htmlFor={"facebook"} id={"facebook"} className={styles.label}>
            Facebook
          </Label>
          <Input
            id={"facebook"}
            name={"facebook"}
            placeholder={"https://facebook.com/johndoe"}
            value={formData.facebook}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, facebook: e.target.value }))
            }
            className={styles.input}
          />{" "}
        </section>
        <section className={styles.section}>
          <Label
            htmlFor={"instagram"}
            id={"instagram"}
            className={styles.label}
          >
            Instagram
          </Label>
          <Input
            id={"instagram"}
            name={"instagram"}
            placeholder={"https://instagram.com/johndoe"}
            value={formData.instagram}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, instagram: e.target.value }))
            }
            className={styles.input}
          />
        </section>
        <section className={styles.section}>
          <Label htmlFor={"whatsapp"} id={"whatspp"} className={styles.label}>
            Whatsapp no.
          </Label>
          <Input
            id={"whatsapp"}
            name={"whatsapp"}
            placeholder={"https://whatsapp.com/johndoe"}
            value={formData.whatsapp}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, whatsapp: e.target.value }))
            }
            className={styles.input}
            type={"tel"}
            inputMode={"numeric"}
            pattern="^\+?[0-9]{11}$"
          />
        </section>
      </div>
      <section className="flex w-full justify-center items-center">
        <Label className={"font-semibold underline mt-8"}>About User</Label>
      </section>
      <section className="mt-8">
        <Label htmlFor={"bio"} id={"bio"} className={styles.label}>
          Bio
        </Label>
        <Textarea
          id={"bio"}
          name={"bio"}
          placeholder={
            "Animal lover on the hunt for furry adventures 🐾 | Adopt, ride, read, repeat 🐶🚚📖 | Your future pet’s biggest fan!"
          }
          value={formData.bio}
          onChange={ e => setFormData(prev => ({...prev, bio: e.target.value}))}
          className={'bg-[#ebe8db] border-[#8C7A3F]'}
        />
      </section>
      <section className="grid grid-cols-2 gap-4 mt-8">
          <Button type={'submit'} className={'bg-[#c9c19c] text-black hover:hover:bg-[#e4d1cd] hover:font-semibold active:font-bold font-semibold'}>Submit</Button>
          <Button onClick={onCancel} className={'bg-red-500 hover:hover:bg-red-700 hover:font-semibold active:font-bold font-semibold'}>Cancel</Button>
      </section>
    </form>
  );
};

export default ProfileUserForm;
