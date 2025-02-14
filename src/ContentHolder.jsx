import ContentCard from "./ContentCard";
import HomeFeedContent from "./HomeFeedContent";
import ProfilePage from "./ProfilePage";

export default function ContentHolder() {
  return (
    <div className="w-full flex justify-center items-center ">
      {/* <HomeFeedContent /> */}
      <ProfilePage />
    </div>
  );
}
