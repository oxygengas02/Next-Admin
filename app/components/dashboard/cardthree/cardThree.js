import { MdAnalytics } from "react-icons/md";

const CardThree = () => {
  return (
    <div className="bg-white p-[5px] rounded-[10px] flex gap-5 pointer w-[100%] hover:bg-slate-200">
      <MdAnalytics size={24} />
      <div className="flex flex-col gap-5 capitalize">
        <span className="">total revenue</span>
        <span className="text-[24px] font-[500]">10.273</span>
        <span className="text-[14] font-[300]">
          <span className="text-lime-500 font-bold">12%</span> more than
          previous week
        </span>
      </div>
    </div>
  );
};
export default CardThree;
