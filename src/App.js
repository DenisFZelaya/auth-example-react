import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LOGIN, LOGOUT, PRIVATE } from "./config/routes/paths";
import Home from "./views/Home";
import Logout from "./views/Logout";
import Private from "./views/Private";
import Login from "./views/Login";
import { AuthContextProvider } from "./context/authContext";
import PublicRoute from "./config/routes/PublicRoute";
import PrivateRoute from "./config/routes/PrivateRoute";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route index element={<Home />} />
            <Route path={LOGIN} element={<Login />} />
          </Route>

          <Route path={PRIVATE} element={<PrivateRoute />}>
            <Route index element={<Private />} />
            <Route path={LOGOUT} element={<Logout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
