import CrossIcon from "./Icons/CrossIcon";
import TextLogo from "./Icons/TextLogo";
import SearchResult from "./SearchResult";

export default function SearchBlock({searchOpen,setSearchOpen}) {
  return (
    // modal wrapper 
    <div className="flex justify-start lg:flex-row fixed top-0 sm:left-[75px] w-full z-10 ">
        {/* search blck wrapper  */}
      <div className="w-3/4 lg:w-[400px] h-screen border-r border-white/20 bg-black shadow-lg shadow-white/50">
          {/* header block  */}
        <div className=" border-b border-white/20 text-white">
          <div className="pt-3  pb-8 pl-6 pr-4 my-2">
            <div className=" text-2xl font-bold hidden sm:block">
              Search
            </div>
            <div className="sm:hidden block">
              <TextLogo />
            </div>
          </div>
          <div className="pt-3 pb-8 pl-3 pr-4 relative">
            <form action="">
              <input
                type="text"
                placeholder="Search"
                className="w-full h-10 bg-stone-500 rounded-lg px-3 placeholder-white/40 focus:outline-none"
              />
            </form>
            {/* cross button  */}
            <div className=" rounded-full flex justify-center items-center bg-white/30 absolute right-6 top-6">
              <CrossIcon size={18} />
            </div>
          </div>
        </div>

        {/* search result wrapper  */}
        <div className="py-4 px-2">
          <SearchResult />
          <SearchResult />
          <SearchResult />
        </div>
      </div>
      <div className="w-1/4 md:w-full" onClick={()=> setSearchOpen(!searchOpen)}/>
    </div>
  );
}
