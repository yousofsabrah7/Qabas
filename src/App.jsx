
import React, { useLayoutEffect } from "react";
import {
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Partner from "./pages/Partner";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Stages from "./pages/Stages";
import Home from "./pages/Home";
import JoinUs from "./pages/JoinUs";
import Login from "./pages/Login";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import ForgetPassword from "./pages/ForgotPassword";
import Management from "./pages/Management";
import ManagementEmpty from "./pages/ManagementEmpty";
import ProjectCreation from "./pages/ProjectCreation";
import ProjectEdit from "./pages/ProjectEdit";

function ManagementAccessRoute() {
  return localStorage.getItem("qabas-demo-session") === "true"
    ? <Outlet />
    : <Navigate to="/login" replace />;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/partners" element={<Partner />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/stages" element={<Stages />} />
          <Route path="/joinUs" element={<JoinUs />} />
          <Route element={<ManagementAccessRoute />}>
            <Route path="/management" element={<Management />} />
            <Route path="/management/empty" element={<ManagementEmpty />} />
            <Route path="/project/create" element={<ProjectCreation />} />
            <Route path="/project/edit" element={<ProjectEdit />} />
          </Route>
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />

          {/* صفحة نسيت كلمة المرور */}
          <Route
            path="/forgot-password"
            element={<ForgetPassword />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
