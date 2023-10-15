import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./Routes";
import HomePage from "../pages/HomePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.ERROR404} element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
