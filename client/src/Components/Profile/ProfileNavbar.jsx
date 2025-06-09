import { UsersRound } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const ProfileNavbar = ({ isAdmin }) => {
  const userType = isAdmin ? "Admin" : "User";
  return (
    <main className="mt-10 border-[#8C7A3F] border-2 rounded-t-lg p-4 bg-[#F2EED9] flex items-center justify-between">
      <section className="flex items-center justify-start gap-2 ml-8">
        <UsersRound size={18} />
        <h4 className="font-inter hover:font-semibold">{userType}</h4>
      </section>

      <section className="flex font-inter items-center gap-8 mr-8">
				<NavLink className={({isActive}) => `${isActive? 'underline text-[#8C7A3F] font-semibold hover:font-bold' : 'hover:font-semibold'}`} to={'.'} end>Info</NavLink>
				<NavLink className={({isActive}) => `${isActive? 'underline text-[#8C7A3F] font-semibold hover:font-bold' : 'hover:font-semibold'}`} to={'adoption'}>Adoption</NavLink>
				<NavLink className={({isActive}) => `${isActive? 'underline text-[#8C7A3F] font-semibold hover:font-bold' : 'hover:font-semibold'}`} to={'transport'}>Transportation</NavLink>
				<NavLink className={({isActive}) => `${isActive? 'underline text-[#8C7A3F] font-semibold hover:font-bold' : 'hover:font-semibold'}`} to={'blog'}>Blog</NavLink>
			</section>
    </main>
  );
};

export default ProfileNavbar;
