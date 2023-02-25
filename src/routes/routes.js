import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";



export const Routes = () => {
  const routes = createBrowserRouter([{ path: "", element: <Home /> }]);
  return routes;
};
