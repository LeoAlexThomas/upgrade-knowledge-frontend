import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import PageNotFound from "./Pages/PageNotFound";
import Login from "./Pages/Login";
import { ToastContainer } from "react-toastify";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import { UserInfoProvider } from "./Context/UserInfoContext";
import { SWRConfig } from "swr";
import api from "./Utils/api";
import MyProfile from "./Pages/MyProfile";
import ProtectedRoute from "./Components/ProtectedRoute";
import ProfileIdPage from "./Pages/ProfileIdPage";
import Lessons from "./Pages/Lessons";
import LessonIdPage from "./Pages/LessonIdPage";
import SearchTutors from "./Pages/searchTutors";
import { SearchTutorFiltersProvider } from "./Context/SearchTutorFiltersContext";

const App = () => {
  return (
    <div className="font-body bg-white h-screen">
      <ToastContainer />
      <BrowserRouter>
        <SWRConfig
          value={{
            fetcher: api,
            errorRetryCount: 5,
            errorRetryInterval: 5000,
          }}
        >
          {/* <UserInfoProvider> */}
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/profile/:id" element={<ProfileIdPage />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/lesson/:id" element={<LessonIdPage />} />
            <Route
              path="/searchTutors"
              element={
                <SearchTutorFiltersProvider>
                  <SearchTutors />
                </SearchTutorFiltersProvider>
              }
            />
            <Route
              path="/myProfile"
              element={
                // <ProtectedRoute>
                <MyProfile />
                // </ProtectedRoute>
              }
            />
            {/* No Match page [404 page not found] */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
          {/* </UserInfoProvider> */}
        </SWRConfig>
      </BrowserRouter>
    </div>
  );
};

export default App;
