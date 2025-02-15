import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import styles from "./App.module.scss";


const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.flex}>
        <Routes>
          <Route path="/" element={<ProfilePage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
