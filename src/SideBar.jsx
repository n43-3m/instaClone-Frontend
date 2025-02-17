import TextLogo from "./Icons/TextLogo";
import Homeicon from "./Icons/HomeIcon";
import SearchIcon from "./Icons/SearchIcon";
import ExploreIcon from "./Icons/ExploreIcon";
import ReelIcon from "./Icons/ReelIcon";
import MassageIcon from "./Icons/MassageIcon";
import Loveicon from "./Icons/LoveIcon";
import AddIcon from "./Icons/AddIcon";
import ProfileIcon from "./Icons/ProfileIcon";
import SvgLogo from "./Icons/SvgLogo";

const menuItems = [
  {
    name: "Home",
    icon: <Homeicon />,
  },
  // {
  //   name:'Search',
  //   icon:<SearchIcon/>,
  // },
  {
    name: "Explore",
    icon: <ExploreIcon />,
  },
  {
    name: "Reels",
    icon: <ReelIcon />,
  },
  {
    name: "Messages",
    icon: <MassageIcon />,
  },
  {
    name: "Notifications",
    icon: <Loveicon />,
  },
  {
    name: "Create",
    icon: <AddIcon />,
  },
  {
    name: "Profile",
    icon: <ProfileIcon />,
  },
];

export default function SideBar({ searchOpen, setSearchOpen, createPost, setCreatePost }) {
  return (
    <aside
      className={`h-20   transition-all duration-[400ms] ease-in-out sm:h-screen w-screen  sm:px-3 pb-5 pt-2 flex flex-row justify-evenly items-center sm:items-start sm:justify-start sm:flex-col font-[Instagram Sans] text-white bg-black text-base sticky bottom-0 left-0 sm:top-0 border-white/20 z-20 ${
        searchOpen
          ? "sm:w-[80px] sm:border-r"
          : "xl:w-[350px] lg:w-[250px] sm:border-r border-t md:border-t-0 sm:w-[80px] "
      }`}
    >
      {/* logo container */}
      <div className="px-3 pt-6 pb-4 hidden sm:block">
        <div className={searchOpen ? "hidden" : "hidden lg:block "}>
          <TextLogo />
        </div>
        <div className={searchOpen ? "block" : "block lg:hidden"}>
          <SvgLogo />
        </div>
      </div>

      {/* menu container  */}
      <div className="sm:py-2 flex w-full items-center justify-evenly sm:flex-col sm:items-start">
        {menuItems.map((item, index) => ( index===5 ? <div
            className="flex w-full items-center justify-center sm:justify-start gap-2 px-3 pt-6 pb-4 hover:bg-white/5 rounded-lg my-1 hover:cursor-pointer relative"
            key={index}
            onClick={()=>setCreatePost(!createPost)}
          >
            <a className="w-full h-full absolute left-0 top-0" href="#hm" />
            {item.icon}
            <span className={searchOpen ? "hidden" : "hidden lg:inline"}>
              {item.name}
            </span>
          </div> : 
          <div
            className="flex w-full items-center justify-center sm:justify-start gap-2 px-3 pt-6 pb-4 hover:bg-white/5 rounded-lg my-1 hover:cursor-pointer relative"
            key={index}
          >
            <a className="w-full h-full absolute left-0 top-0" href="#hm" />
            {item.icon}
            <span className={searchOpen ? "hidden" : "hidden lg:inline"}>
              {item.name}
            </span>
          </div>
        ))}
        <div
          onClick={() => setSearchOpen(!searchOpen)}
          className={`sm:flex w-full items-center justify-center sm:justify-start gap-2 px-3 pt-6 pb-4 hover:bg-white/5 rounded-lg my-1 hover:cursor-pointer block relative ${
            searchOpen && "border border-white"
          }`}
        >
          <a className="w-full h-full absolute left-0 top-0" href="#sr" />
          <SearchIcon />

          <span className={searchOpen ? "hidden" : "hidden lg:inline"}>
            Search
          </span>
        </div>
      </div>
    </aside>
  );
}
