import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { apiUrl } from "../../config";

// const MenuCategoryDetail = ({ match }) => {
//   const [name, setName] = useState(match.params.name);

//   useEffect(() => {
//     const { name: newName } = match.params;
//     if (name !== newName) {
//       setName(newName);
//     }
//   }, [match.params, name]);
//   return (
//     <div>
//       <h3>{name}</h3>
//     </div>
//   );
// };

// MenuCategoryDetail.propTypes = {
//   match: PropTypes.shape({
//     params: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//     }),
//   }).isRequired,
// };
const MenuCategoryDetail = ({ match }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`${apiUrl}/api/products/category/${match.params.id}`);
      const result = await response.json();
      console.log(result); // Verifica la respuesta de la API
      setProducts(result.data);
      setLoading(false);
    };
    fetchProducts();
  }, [match.params.id]);

  if (loading) {
    return <div>Cargando Productos...</div>;
  }

  return (
    <div>
      <h2>Productos en la Categoria {match.params.name}</h2>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>id: {product.id}</p>
            <p>Category: {product.category.name}</p>
            <p>precio: {product.price}</p>
            <p>Marca: {product.brand.name}</p>
            <p>Modelo:{product.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

MenuCategoryDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default MenuCategoryDetail;
