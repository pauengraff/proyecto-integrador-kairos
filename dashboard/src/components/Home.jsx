import "./Home.css";
import ProductsButton from "./Content/ProductsButton";
import CategoriesButton from "./Content/CategoriesButton";
import UsersButton from "./Content/UsersButton";
import bannerHome from "../assets/images/banner-home.png";


export default function Home (){
return (
    <div className="home">
        <img src={bannerHome} alt='bannerHome' className="banner-home"/>
        <ProductsButton />
        <CategoriesButton />
        <UsersButton />
    </div>
)
}

