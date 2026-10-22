import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/home/HomeFooter";

export default function MainLayout() {
  const location = useLocation();

  return (
    <div dir="rtl" className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <div key={location.pathname} className="page-transition">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}