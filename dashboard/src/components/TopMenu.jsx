import "./TopMenu.css";
import "./ProductsTotal";

export default function TopMenu() {
  return <div className="topMenu">
    <ProductsTotal />
    <Users />
    <Categories />
  </div>;
}
