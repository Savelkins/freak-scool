import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";

import NotFoundPage from "./pages/NotFoundPage";
import styles from "./App.module.scss";

import SideBar from "./components/SideBar/SideBar";
const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.flex}>
        <SideBar />
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
