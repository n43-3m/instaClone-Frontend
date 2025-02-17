export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center w-screen h-screen p-3">
      <div className="w-screen md:w-[600px] lg:w-[800px] p-3 sm:p-6 border border-white/30 rounded-lg text-white">
          {/* <span className="border-b-2 pb-3 px-5 border-white/20 text-center"></span> */}
        <p className="text-center text-2xl font-bold mb-8">SignUp
        </p>
        <form action="#">
          <input
            type="text"
            placeholder="Enter your name"
            className="border border-white/20 px-2 bg-transparent py-2 rounded-md w-full mb-5"
          />
          <input
            type="text"
            placeholder="Enter your username"
            className="border border-white/20 px-2 bg-transparent py-2 rounded-md w-full mb-5"
          />
          <input
            type="text"
            placeholder="Enter your email"
            className="border border-white/20 px-2 bg-transparent py-2 rounded-md w-full mb-5"
          />
          <input
            type="text"
            placeholder="Enter your password"
            className="border border-white/20 px-2 bg-transparent py-2 rounded-md w-full mb-5"
          />
          <input
            type="text"
            placeholder="confirm password"
            className="border border-white/20 px-2 bg-transparent py-2 rounded-md w-full mb-5"
          />
          {/* <input type="submit"  />  */}
          <button type="submit" className="w-full rounded-lg py-2 mb-5 gradientStroke">Create account</button>
          
        </form>

        <div>
            <p className="text-center">Already have an account? <a href="/login" className="font-bold hover:underline">LogIn</a></p>
        </div>
      </div>
    </div>
  );
}
