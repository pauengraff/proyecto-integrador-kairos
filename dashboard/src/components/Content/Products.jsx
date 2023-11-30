import ProductItem from "./ProductItem";
import { Component } from "react";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3008/api/products")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const products = json.data;
        console.log("products", products);
        this.setState({
          products: products,
        });
      });
  }

  render() {
    return (
      <section className="">
        <h2 className="">Productos</h2>
        <div className="">
          {this.state.products.length === 0
            ? "Cargando..."
            : this.state.products.map((products) => (
                <ProductItem key={products.id} name={products.name} />
              ))}
        </div>
      </section>
    );
  }
}

export default Products;
