
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import HomeFooter from "../components/home/HomeFooter";

export default function MainLayout() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-1">
                <Outlet />
            </main>

            <HomeFooter />
        </div>
    );
}
