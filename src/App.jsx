import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";

import CoursesPage from "./pages/coursesPage";
import NotFoundPage from "./pages/notFoundPage";
import styles from "./App.module.scss";

import SideBar from "./components/SideBar/SideBar";
const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.flex}>
        <SideBar />
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/courses" element={<CoursesPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
