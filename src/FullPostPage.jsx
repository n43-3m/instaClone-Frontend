import ContentCard from "./ContentCard";

export default function FullPostPage() {
  return (
    <div className="flex flex-col justify-start items-center px-1 py-3 md:py-4 lg:py-5">
      <ContentCard />
      <div className="w-full h-[2px] bg-white/50 my-8 rounded-full"></div>
      <ContentCard />
      <ContentCard />
    </div>
  );
}
