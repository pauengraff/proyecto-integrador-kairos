import ProductItem from "./ProductItem";
import { Component } from "react";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3008/api/products")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const product = json.data;
        console.log("product", product);
        this.setState({
          product: product,
        });
      });
  }

  render() {
    return (
      <section className="">
        <h2 className="">Productos</h2>
        <div className="">
          {this.state.product.length === 0
            ? "Cargando..."
            : this.state.product.map((product) => (
                <ProductItem key={product.id} name={product.name} />
              ))}
        </div>
      </section>
    );
  }
}

export default Products;
