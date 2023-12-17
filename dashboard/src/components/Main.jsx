import "./Main.css";
import Products from "./Content/Products";

export default function Main() {
  return (
    <main className='main'>
      <div className='main-container'>
        <h2 className='title'>Productos</h2>
        <Products />
      </div>
    </main>
  );
}
