import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main-page/main-page";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter basename={"/"}>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route index element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
