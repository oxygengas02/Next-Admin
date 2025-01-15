export default function Pagination() {
  return (
    <div className="flex justify-between p-[10px]">
      <button className="bg-slate-500 capitalize :bg-transparent text-white py-[5px] px-[10px] cursor-pointer disabled:cursor-not-allowed rounded-[5px]">
        previous
      </button>
      <button className="bg-slate-500 capitalize text-white py-[5px] px-[10px] cursor-pointer disabled:cursor-not-allowed rounded-[5px]">
        next
      </button>
    </div>
  );
}
