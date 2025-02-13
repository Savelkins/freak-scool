import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
