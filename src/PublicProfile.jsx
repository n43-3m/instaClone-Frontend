export default function PublicProfile() {
  return (
    <>
      {/* header wrapper  */}
      <div className="flex py-5 lg:gap-8 text-white border-b border-white/30">
        {/* pic wrapper  */}
        <div className="flex justify-center items-center w-1/3 ">
          <img
            src="https://avatar.iran.liara.run/public"
            className=" h-20 md:h-32 w-20 md:w-32 rounded-full"
            alt="profile pic"
          />
        </div>

        {/* details wrapper  */}
        <div className="w-2/3 flex flex-col gap-4">
          {/* name div wrapper  */}
          <div className="flex items-center text-xl font-bold justify-between">
            <span>user name</span>
            <button className=" px-4 py-2 bg-stone-600 text-base font-normal rounded-xl">
              Follow
            </button>
          </div>
          {/* follower & post wrapper  */}
          <div className="flex items-center justify-around md:justify-start gap-1 md:gap-10 py-2 text-white font-medium text-base md:text-lg">
            <div className="flex flex-col md:flex-row items-center gap-1">
              <span>123</span>
              <span className="font-normal">posts</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-1">
              <span>123K</span>
              <span className="font-normal">followers</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-1">
              <span>123</span>
              <span className="font-normal">following</span>
            </div>
          </div>
          {/* bio wrapper  */}
          <div>
            <p>bio/ details block here.</p>
          </div>
        </div>
      </div>

      {/* post wrapper  */}
      <div className="grid grid-cols-3 justify-evenly py-3 gap-1 lg:gap-2">
        {Array.from({ length: 20 }, (_, index) => (
          <div
            key={index}
            className="w-full h-[170px] sm:h-[200px] lg:h-[250px] bg-slate-400 rounded-sm relative cursor-pointer"
          >
            <a
              href="postLink"
              className=" absolute top-0 left-0 w-full h-full"
            />
          </div>
        ))}
      </div>
    </>
  );
}
