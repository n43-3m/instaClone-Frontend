import ThreeDotIcon from "./Icons/ThreeDotIcon";
import Loveicon from "./Icons/LoveIcon";
import CommentIcon from "./Icons/CommentIcon";
import ShareIcon from "./Icons/ShareIcon";
import BookMarkIcon from "./Icons/BookMarkIcon";
import { useState } from "react";
import ProfileModal from "./ProfileModal";

export default function ContentCard() {
  const [showProfileModal, setProfileModal] = useState(false);
  return (
    // <div className="w-full sm:w-[470px] text-white">
    <div className="w-screen sm:w-[470px] md:w-[500px] lg:w-[600px] px-1 text-white">
      {/* header */}
      <div className="flex justify-between items-center py-2">
        {/* left side */}
        <div className="flex items-center gap-2 relative">
          <img
            src="https://avatar.iran.liara.run/public"
            alt="profile picture"
            className="h-12 w-12"
          />
          <span onMouseEnter={() => setProfileModal(true)}>
            <a href="#">user name</a>
            {showProfileModal && (
              <ProfileModal setProfileModal={setProfileModal} />
            )}
          </span>
          <span>.</span>
          <span>13h</span>
        </div>
        {/* 3dot */}
        <div className="">
          <ThreeDotIcon />
        </div>
      </div>

      {/* main content  */}
      <div className="h-[500px] rounded-md my-2 bg-white/30">
        {" "}
        {/*h-[500] just a place holder */}
        {/* logical rndring text, img, video  */}
      </div>

      {/* share,react section  */}
      <div className="flex justify-between items-center py-2">
        <div className="flex items-center gap-5">
          <Loveicon />
          <CommentIcon />
          <ShareIcon />
        </div>
        <div className="">
          <BookMarkIcon />
        </div>
      </div>

      {/* info section  */}
      <div className="flex flex-col justify-start gap-2 border-b border-white/20 pb-4 mb-2">
        {/* likes */}
        <div>
          <a href="#">71 likes</a>
        </div>

        {/* cptn  */}
        <div>
          <p>
            <a href="#">user name</a> ``cptn of the post here{" "}
          </p>
        </div>

        {/* comment  */}
        <span>
          <a href="#">View all N comments</a>
        </span>
      </div>
    </div>
  );
}
