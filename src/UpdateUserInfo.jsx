import CrossIcon from "./Icons/CrossIcon";

export default function UpdateUserInfo({ setUpdateModal }) {
  return (
    <div className="fixed left-0 top-0 w-screen h-screen bg-black/80 z-40 flex justify-center items-center px-3 text-white ">
      <div className="w-screen md:w-[600px] lg:w-[800px] p-3 sm:p-6 border border-white/30 rounded-lg text-white bg-black relative">
        <div
          className="p-3 flex justify-center items-center absolute right-1 top-1 hover:bg-gray-900 hover:cursor-pointer rounded-full"
          onClick={() => setUpdateModal(false)}
        >
          <CrossIcon size={24} />
        </div>
        <form action="#">
          <label htmlFor="name" className="pb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="border border-white/20 px-2 bg-transparent py-2 rounded-md w-full mb-5"
          />
          <label htmlFor="userName" className="mb-2">
            userName
          </label>
          <input
            id="userName"
            type="text"
            placeholder="Enter your user name"
            className="border border-white/20 px-2 bg-transparent py-2 rounded-md w-full mb-5"
          />
          <label htmlFor="email" className="mb-2">
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="Enter your email"
            className="border border-white/20 px-2 bg-transparent py-2 rounded-md w-full mb-5"
          />
          <label htmlFor="password" className="mb-2">
            Password
          </label>
          <input
            id="password"
            type="text"
            placeholder="Enter your password"
            className="border border-white/20 px-2 bg-transparent py-2 rounded-md w-full mb-5"
          />
          <label htmlFor="profilePic">profile pic</label>
          <input type="file" id="profilePic" className="w-full" />

          {/* <input type="submit"  />  */}
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className=" rounded-lg font-semibold py-2 px-3 mb-5 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
