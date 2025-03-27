// AppRoutes.tsx
import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Todo from "../pages/Todo";
import CounterPage from "../pages/CounterPage";

const AppRoutes: React.FC = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/todo", element: <Todo /> },
    { path: "/counter", element: <CounterPage /> },
  ]);

  return routes;
};

export default AppRoutes;