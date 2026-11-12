import  type {LucideIcon} from "lucide-react"
import React from "react"

type SideBarContent = {
    Icon: LucideIcon, 
    Label: string,

}
function SideBarItem({Icon, Label}: SideBarContent) {
    return(
        <button className="flex flex-row items-center gap-4 px-2.5 py-1 rounded-md w-63.75 h-8 cursor-pointer transition-colors duration-200  hover:bg-[#2C2C2E]">
            <Icon size={18} color="#CECFD2"/>
            <p className="text-md text-[#CECFD2]">{Label}</p>
        </button>
    )
} 
export default SideBarItem;