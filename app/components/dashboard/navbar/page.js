"use client";

import { usePathname } from "next/navigation";

import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

export default function Navbar() {
  const pathName = usePathname();
  return (
    <div className="bg-white flex flex-col md:flex-row items-center justify-between p-5 rounded-[10px]">
      <div className="capitalize font-bold mb-5">
        {pathName.split("/").pop()}
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-[10px] bg-slate-200 p-3 rounded-[10px]">
          <MdSearch size={20} />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-none outline-none"
          />
        </div>
        <div className="flex gap-5">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
}
