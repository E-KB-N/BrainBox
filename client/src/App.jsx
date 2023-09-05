import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Allcourse from "./pages/Allcourses/Allcourses";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Level100 from "./pages/Level100/Level100";
import Level200 from "./pages/Level200/Level200";
import Level300 from "./pages/Level300/Level300";
import Level400 from "./pages/Level400/Level400";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="all-courses" element={<Allcourse />} />
        <Route path="/level100" element={<Level100 />} />
        <Route path="/level200" element={<Level200 />} />
        <Route path="/level300" element={<Level300 />} />
        <Route path="/level400" element={<Level400 />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
