import { MdSearch } from "react-icons/md";

export default function Search({ placeholder }) {
  return (
    <div className="flex items-center gap-[10px] bg-slate-200 p-3 rounded-[10px]">
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent border-none outline-none"
      />
    </div>
  );
}
