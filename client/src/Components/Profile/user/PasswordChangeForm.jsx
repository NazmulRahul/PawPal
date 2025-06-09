import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import React from "react";

const PasswordChangeForm = ({ onAction }) => {
	const styles = {
		input: "bg-[#ebe8db] outline-[#fffae6] border-[#8C7A3F] cursor-pointer"
	}
  return (
    <form action={onAction} className="flex flex-col justify-around">
      <main className="flex flex-col gap-3">
        <section className="flex flex-col gap-0.5">
          <Label id="new" htmlFor={"new"} className={"font-semibold"}>
            New Password
          </Label>
          <Input id="new" name="new" placeholder={"qWeRtY@10"} className={styles.input}/>
        </section>
        <section className="flex flex-col gap-0.5 mb-2">
          <Label id="confirm" htmlFor={"confirm"} className={"font-semibold"}>
            Confirm Password
          </Label>
          <Input id="confirm" name="confirm" placeholder={"qWeRtY@10"} className={styles.input} />
        </section>
      </main>

      <Button
        className={`w-full bg-[#c9c19c] hover:bg-[#e4d1cd] hover:font-bold active:font-bold text-black font-semibold`}
      >
        Confirm Password
      </Button>
    </form>
  );
};

export default PasswordChangeForm;
