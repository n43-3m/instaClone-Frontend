import { useState } from "react";
import ContentHolder from "./ContentHolder";
import SideBar from "./SideBar";
import SearchBlock from "./SearchBlock";
import NewPostModal from "./NewPostModal";
import SignUpPage from "./SignUpPage";
import LogInPage from "./LogInPage";
import { Outlet } from "react-router";

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [createPost, setCreatePost] = useState(false);

  return (
    <div className="bg-black relative  flex flex-col-reverse sm:flex-row sm:justify-start  ">
      <SideBar
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        createPost={createPost}
        setCreatePost={setCreatePost}
      />
      {/* search block */}
      {searchOpen && (
        <SearchBlock searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
      )}
      <div className="w-full flex justify-center items-center ">
        <Outlet />
      </div>
      {createPost && (
        <NewPostModal createPost={createPost} setCreatePost={setCreatePost} />
      )}
    </div>
  );
}
