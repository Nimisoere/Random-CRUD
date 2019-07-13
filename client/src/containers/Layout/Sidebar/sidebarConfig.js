import { GoDashboard } from "react-icons/go";
import {
  MdAccountBalance,
  MdPersonAdd,
  MdCreditCard
} from "react-icons/md";

export const menuConfig = {
  menus: [
    {
      categoryBlock: true,
      title: "Dashboard",
      icon: GoDashboard,
      path: "/dashboard",
      permissions: []
    },
    {
      title: "User Management",
      path: "/users",
      permissions: [],
      icon: MdPersonAdd
    },
    {
      title: "Card Requests",
      icon: MdCreditCard,
      path: "/card-requests",
      permissions: []
    },
    {
      category: true,
      title: "Issuer Mangement",
      icon: MdAccountBalance,
      permissions: [],
      menus: [
        {
          title: "Map Domains/Issuers",
          path: "/domains-issuers",
          permissions: []
        },
        {
          title: "Issuer Configuration",
          path: "/issuers/config",
          permissions: []
        }
      ]
    },
  ]
};
