import { useState } from "react";
import ContentHolder from "./ContentHolder";
import SideBar from "./SideBar";
import SearchBlock from "./SearchBlock";
import NewPostModal from "./NewPostModal";

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [createPost, setCreatePost] = useState(false);

  return (
    <div className="bg-black relative  flex flex-col-reverse sm:flex-row sm:justify-start w-screen ">
      <SideBar searchOpen={searchOpen} setSearchOpen={setSearchOpen} createPost={createPost} setCreatePost={setCreatePost}/>
      {/* search block */}
      {searchOpen && (
        <SearchBlock searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
      )}
      <ContentHolder />
      {createPost && (
        <NewPostModal createPost={createPost} setCreatePost={setCreatePost} />
      )}
    </div>
  );
}
