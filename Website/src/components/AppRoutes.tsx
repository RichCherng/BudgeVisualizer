// AppRoutes.tsx
import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Todo from "../pages/Todo";

const AppRoutes: React.FC = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/todo", element: <Todo /> },
  ]);

  return routes;
};

export default AppRoutes;