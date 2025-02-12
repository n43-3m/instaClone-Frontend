import { useState } from "react";
import ContentHolder from "./ContentHolder";
import SideBar from "./SideBar";
import SearchBlock from "./SearchBlock";
import ProfilePage from "./ProfilePage";

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="bg-black relative  flex flex-col-reverse sm:flex-row sm:justify-start w-screen ">
      <SideBar searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
      {/* search block */}
      {searchOpen && (
        <SearchBlock searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
      )}
      <ContentHolder />
    </div>
  );
}
