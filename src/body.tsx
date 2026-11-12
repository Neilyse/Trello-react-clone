import {SquarePen,LockKeyhole} from "lucide-react"
export default function  body(){
    return(
        <div>
            <button className="bg-[#6AB4E7] text-black text-4xl font-medium rounded-md px-4 py-4 w-[58px] h-[58px]">N</button>
            <span>Neila's workspace</span>
            <SquarePen color="#817979" />
            <div>
                <LockKeyhole color="#817979" />
                <span className="font-light text-sm">Private</span>
            </div>
        </div>
    )
}