import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
//mui
import HubIcon from "@mui/icons-material/Hub";
import SettingsIcon from "@mui/icons-material/SettingsInputCompositeOutlined";
import Hub from "../components/layouts/dashboard/hub/Hub";
import Settings from "../components/layouts/dashboard/settings/Settings";

export const Routes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [{ path: "/hub", element: <Hub />, },{path:"/settings",element:<Settings/>}],
    },
  ]);
  return routes;
};

export const NavButtons = () => [
  { path: "/hub", title: "Hub", icon: <HubIcon /> },
  { path: "/settings", title: "Settings", icon: <SettingsIcon /> },
];



