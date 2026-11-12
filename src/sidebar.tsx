import SideBarItem from "./sidebarItem";
import { Grid2x2, SquarePlus, Activity } from "lucide-react";
export default function SideBar() {
  return (
    <div className=" flex flex-col  gap-2 py-3  mt-10 px-5 border-b border-gray-500">
      <SideBarItem Icon={Grid2x2} Label="Boards" />
      <SideBarItem Icon={SquarePlus} Label="Tempelates" />
      <SideBarItem Icon={Activity} Label="Home" />
    </div>
  );
}
