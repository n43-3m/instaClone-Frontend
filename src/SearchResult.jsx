

export default function SearchResult() {
    return (
        <div className="w-full flex gap-3 text-white font-medium p-2 items-center mb-2 hover:bg-white/10 cursor-pointer relative">
        <a href="profile-link" className=" absolute left-0 top-0 w-full h-full"/>
          <img
            src="https://avatar.iran.liara.run/public"
            alt="profile picture"
            className="w-12 h-12"
          />
          <div className="flex flex-col leading-tight">
            <span className="">max joal maddy</span>
            <span className="font-light text-white/50">user name </span>
          </div>
        </div>
    )
}