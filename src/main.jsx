import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import LogInPage from "./LogInPage.jsx";
import SignUpPage from "./SignUpPage.jsx";
import HomeFeedContent from "./HomeFeedContent.jsx";
import ExplorePage from "./ExplorePage.jsx";
import ProfilePage from "./ProfilePage.jsx";
import PublicProfile from "./PublicProfile.jsx";
import UserProfile from "./UserProfile.jsx";
import FullPostPage from "./FullPostPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomeFeedContent />} />
          <Route path="explore" element={<ExplorePage />} />
          <Route path="post/:id" element={<FullPostPage />} />
          <Route path="profile" element={<ProfilePage />}>
            {/* Redirect /profile to /profile/me */}
            <Route index element={<Navigate to="me" replace />} />
            <Route path="me" element={<UserProfile />} />
            <Route path=":id" element={<PublicProfile />} />
          </Route>
        </Route>
        <Route path="logic" element={<LogInPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route />
        <Route
          path="*"
          element={
            <div className="text-white text-center m-auto text-4xl">
              404 not found
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
