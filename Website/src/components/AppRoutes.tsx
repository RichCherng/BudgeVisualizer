// AppRoutes.tsx
import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

const AppRoutes: React.FC = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
  ]);

  return routes;
};

export default AppRoutes;