import ContentCard from "./ContentCard";


export default function HomeFeedContent() {
    return (
        <div className="w-[320px] sm:w-[600px] p-5 ">
        {/* story wrapper */}
        <div className="flex justify-start items-center gap-4 py-2 my-3 text-white font-light w-full overflow-hidden">
          {/* single story block */}
          {Array.from({ length: 7 }, (_, index) => (
            <div className="flex flex-col items-center " key={index}>
              <div className="p-[3px] rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] ">
                <div className="rounded-full bg-[url(https://avatar.iran.liara.run/public)] bg-cover h-14 w-14"></div>
              </div>
              <span>joel max</span>
            </div>
          ))}
        </div>
        {/* post holder */}
        <div className="flex flex-col justify-start items-center">
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
        </div>
      </div>
    )
}