export default function ProfileModal({setProfileModal}) {
  return (
    <div className=" absolute w-[336px] h-[336px] bg-black shadow-xl shadow-white/30 rounded-lg border border-white/30 md:block hidden"
    onMouseLeave={()=>setProfileModal(false)}>
      {/* header  */}
      <div className="flex items-center gap-4 py-6 px-3">
        <img
          src="https://avatar.iran.liara.run/public"
          alt="profile picture"
          className="h-16 w-16"
        />
        {/* username wrapper  */}
        <div className="flex flex-col items-start  font-bold">
          <span>
            <a href="#">user name</a>
          </span>
          <span className="font-thin text-sm">bio/details</span>
        </div>
      </div>

      {/* follower & post wrapper  */}
      <div className="flex items-center justify-evenly py-2">
        <div className="flex flex-col items-center">
          <span>123</span>
          <span>posts</span>
        </div>
        <div className="flex flex-col items-center">
          <span>123K</span>
          <span>followers</span>
        </div>
        <div className="flex flex-col items-center">
          <span>123</span>
          <span>following</span>
        </div>
      </div>

      {/* tp 3 post wrapper  */}
      <div className="flex gap-1 py-3">
        {Array.from({ length: 3 }, (_, index) => (
          <div
            className="relative w-[120px] h-[120px] bg-green-300 cursor-pointer"
            key={index}
          >
            <a
              href="postLink"
              className=" absolute top-0 left-0 h-full w-full"
            />
            <img src="https://avatar.iran.liara.run/public" alt="post image" />
          </div>
        ))}
      </div>
    </div>
  );
}
