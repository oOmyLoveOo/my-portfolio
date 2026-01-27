import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
    return (
        // ⬇️ ELIMINA bg-white dark:bg-black text-gray-900 dark:text-teal-100
        <div className="min-h-screen transition-colors duration-300">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
export default Layout;