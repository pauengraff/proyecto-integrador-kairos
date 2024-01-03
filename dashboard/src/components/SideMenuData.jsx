import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import FeaturedPlayListIcon from "@mui/icons-material/Watch";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContactsIcon from "@mui/icons-material/Contacts";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import NewReleasesIcon from '@mui/icons-material/NewReleases';

export const SideMenuData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "Relojes",
    icon: <FeaturedPlayListIcon />,
    link: "/products",
  },
  {
    title: "Control Panel",
    icon: <PrivacyTipIcon />,
    link: "/panel",
  },
  {
    title: "Login",
    icon: <LoginIcon />,
    link: "/login",
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
];
