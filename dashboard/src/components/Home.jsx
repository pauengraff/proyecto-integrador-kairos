import "./Home.css";
import ProductsButton from "./Content/ProductsButton";
import CategoriesButton from "./Content/CategoriesButton";
import UsersButton from "./Content/UsersButton";

export default function Home (){
return (
    <div className="home">
        <ProductsButton />
        <CategoriesButton />
        <UsersButton />
    </div>
)
}