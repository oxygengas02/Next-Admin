"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  const pathname = usePathname();
  const linkstyle =
    "p-[15px] flex items-center gap-[10px] hover:bg-slate-500 hover:text-white my-[5px] rounded-[5px]";
  const activeLink = "bg-slate-500 text-white";
  return (
    <Link
      href={item.path}
      className={`${linkstyle} ${pathname === item.path && activeLink}`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};
export default MenuLink;
