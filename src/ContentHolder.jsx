import ContentCard from "./ContentCard";
import ExplorePage from "./ExplorePage";
import FullPostPage from "./FullPostPage";
import HomeFeedContent from "./HomeFeedContent";
import ProfilePage from "./ProfilePage";

export default function ContentHolder() {
  return (
    <div className="w-full flex justify-center items-center ">
      {/* <HomeFeedContent /> */}
      {/* <ProfilePage /> */}
      {/* <ExplorePage /> */}
      <FullPostPage />
    </div>
  );
}
