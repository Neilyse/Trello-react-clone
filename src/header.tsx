import {LayoutGrid,Megaphone, Bell,CircleQuestionMark,CircleUser,Search} from "lucide-react"

function Header(){
    return(
        <div className=" flex flex-row py-2.5 gap-3 justify-between border-b-1 border-gray-500">
            <div className="flex gap-3">
                 <LayoutGrid color="#817979" size={26} /> 
            <img src="src\assets\trello.jpg" className="w-5 h-6" ></img>
            </div>
            <div className="flex ml-8">
           <div className=" flex  gap-3">
             <div className="relative w-96" >
      <input
        type="text"
        placeholder="search"
        className="peer w-full text-[#8F9097] rounded-md border border-gray-300  pl-10 pr-4 not-placeholder-shown:pl-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Search
        color="#817979"
        size={18}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 peer-not-placeholder-shown:hidden"
      />
    </div>
            <button className="bg-[#669DF1] text-md h-7  px-2 rounded-md">Create</button>
           </div>
           <div className="flex gap-3.5 px-3.5">
             <Megaphone color="#817979" />
            <Bell color="#817979" />
            <CircleQuestionMark color="#817979" />
            <img src="src\assets\50.png" className=" w-8 h-6"></img>
           </div>
           </div>
           </div>
    )
}

 export default Header;
