
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Breadcrumbs />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
