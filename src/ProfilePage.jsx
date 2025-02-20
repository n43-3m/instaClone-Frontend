import { Outlet } from "react-router";

export default function ProfilePage() {
  return (
    // <div className="w-[320px] sm:w-[600px] lg:w-[800px] ">
    <div className="w-screen md:w-[600px] lg:w-[800px] px-1">
      <Outlet />
    </div>
  );
}
