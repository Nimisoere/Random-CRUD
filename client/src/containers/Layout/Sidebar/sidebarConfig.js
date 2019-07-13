import { GoDashboard } from "react-icons/go";
import { MdDirectionsBoat } from "react-icons/md";

export const menuConfig = {
  menus: [
    {
      categoryBlock: true,
      title: "Dashboard",
      icon: GoDashboard,
      path: "/",
      permissions: []
    },
    {
      title: "Shipments",
      path: "/shipments",
      permissions: [],
      icon: MdDirectionsBoat
    }
  ]
};
