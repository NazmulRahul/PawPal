import { logoutUser } from "@/Store/Auth";
import {
  FilePenLine,
  LogOut,
  LogOutIcon,
  NotebookPen,
  PawPrint,
  Truck,
  User,
} from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import ChangePassword from "./user/ChangePassword";

const ProfileSidebar = ({userInfo}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const showEditPassword =
    !pathname.includes("adopt") &&
    !pathname.includes("transport") &&
    !pathname.includes("blog");
  const handleLogout = async () => {
    await dispatch(logoutUser());
    navigate("/");
  };
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
            to={"transport"}
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
      <div>
        {showEditPassword ? (
          <div className="py-3 hover:bg-[#e4d1cd]">
            <ChangePassword userId={userInfo?.userId}/>
          </div>
        ) : null}
        <div className="py-4 hover:bg-[#e4d1cd]">
          <button
            onClick={handleLogout}
            className="flex justify-center items-center w-full"
          >
            <LogOut />
            Logout
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProfileSidebar;
