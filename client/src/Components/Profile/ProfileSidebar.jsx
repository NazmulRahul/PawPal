import { logoutUser } from "@/Store/Auth";
import { LogOut, NotebookPen, PawPrint, Truck, User } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const ProfileSidebar = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const handleLogout = async () => {
		await dispatch(logoutUser())
		navigate('/')
	}
  return (
    <main className="border-2 border-t-0 border-l-0 border-b-0 border-[#8C7A3F] flex flex-col justify-between min-w-50 ">
      <div>
        <section>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "font-semibold hover:font-bold bg-[#e4d1cd]"
                  : "hover:font-semibold"
              } flex justify-center items-center gap-1 py-3`
            }
            to={"."}
            end
          >
            {" "}
            <User />
            Profile
          </NavLink>
        </section>
        <section>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "font-semibold hover:font-bold bg-[#e4d1cd]"
                  : "hover:font-semibold"
              } flex justify-center items-center gap-1 py-3`
            }
            to={"adoption"}
          >
            <PawPrint />
            Adopt
          </NavLink>
        </section>
        <section>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "font-semibold hover:font-bold bg-[#e4d1cd]"
                  : "hover:font-semibold"
              } flex justify-center items-center gap-1 py-3`
            }
            to={"tranport"}
          >
            <Truck />
            Transport
          </NavLink>
        </section>
        <section>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "font-semibold hover:font-bold bg-[#e4d1cd]"
                  : "hover:font-semibold"
              } flex justify-center items-center gap-1 py-3`
            }
            to={"blog"}
          >
            <NotebookPen />
            Blog
          </NavLink>
        </section>
      </div>

			<div className="py-5 hover:bg-[#e4d1cd]">
				<button onClick={handleLogout} className="flex justify-center items-center w-full"><LogOut/>Logout</button>
			</div>
    </main>
  );
};

export default ProfileSidebar;
