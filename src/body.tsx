import { SquarePen, LockKeyhole } from "lucide-react";
export default function Body() {
  return (
    <div className="flex gap-6 mt-10 py-3 w-[851px] border-b border-gray-500 ">
      <button className="bg-[#6AB4E7] text-black text-4xl font-medium rounded-md px-4 py-2 w-[58px] h-[58px]">
        N
      </button>
      <div className="flex flex-col gap-1">
        <div className=" flex  gap-3.5  items-center">
          <span className=" text-[#CECFD2] font-semibold text-2xl">
            Neila's workspace
          </span>
          <SquarePen color="#817979" size={15} />
        </div>

        <div className=" flex gap-2 px-3.5 ">
          <LockKeyhole color="#817979" size={15}/>
          <span className="font-normal  text-sm  text-[#8F9097]">Private</span>
        </div>
      </div>
    </div>
  );
}
