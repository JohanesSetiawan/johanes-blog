import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./Pages/IndexPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route
          // Route menuju ke index page
          index
          element={<IndexPage />}
        />
        <Route
          // Route menuju ke login page
          path={"/login"}
          element={
            <LoginPage />
          }
        />
        <Route
          // Route menuju ke register page
          path={"/register"}
          element={
            <RegisterPage />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
