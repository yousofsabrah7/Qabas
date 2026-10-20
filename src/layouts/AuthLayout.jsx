
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <main className="min-h-screen bg-[#F8F6F0]">
            <Outlet />
        </main>
    );
}
