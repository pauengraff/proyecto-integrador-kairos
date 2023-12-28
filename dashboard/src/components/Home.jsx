import "./Home.css";
import ProductsButton from "./Content/ProductsButton";
import CategoriesButton from "./Content/CategoriesButton";
import UsersButton from "./Content/UsersButton";
import logoHome from "../assets/images/categories/ImagenHome.jpeg";


export default function Home (){
return (
    <div className="home">
        <img src={logoHome} alt='logoHome' />
        <ProductsButton />
        <CategoriesButton />
        <UsersButton />
    </div>
)
}

