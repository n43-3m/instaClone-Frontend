import { Outlet } from "react-router";
import ExplorePage from "./ExplorePage";
import FullPostPage from "./FullPostPage";
import HomeFeedContent from "./HomeFeedContent";
import ProfilePage from "./ProfilePage";

export default function ContentHolder() {
  return (
    <div className="w-full flex justify-center items-center ">
      <Outlet />
      {/* <HomeFeedContent /> */}
      {/* <ProfilePage /> */}
      {/* <ExplorePage /> */}
      {/* <FullPostPage /> */}
    </div>
  );
}
