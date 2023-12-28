import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import FeaturedPlayListIcon from "@mui/icons-material/Watch";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContactsIcon from "@mui/icons-material/Contacts";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";

export const SideMenuData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "Login",
    icon: <LoginIcon />,
    link: "/login",
  },
  {
    title: "Relojes",
    icon: <FeaturedPlayListIcon />,
    link: "/products",
  },
  {
    title: "Tu Carrito",
    icon: <ShoppingCartIcon />,
    link: "/cart",
  },
  {
    title: "Contacto",
    icon: <ContactsIcon />,
    link: "/contact",
  },
  {
    title: "Control Panel",
    icon: <PrivacyTipIcon />,
    link: "/panel",
  },
];
