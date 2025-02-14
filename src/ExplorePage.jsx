export default function ExplorePage() {
  return (
    <div className="w-screen md:w-[600px] lg:w-[800px] px-1">
      <div className="flex justify-center items-center text-white py-5 text-3xl font-bold">
        <span>Explore</span>
      </div>

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
    </div>
  );
}
