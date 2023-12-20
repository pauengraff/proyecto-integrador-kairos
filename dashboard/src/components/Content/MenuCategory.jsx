import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiUrl } from "../../config";
//import GenreDetail from "./Detalle-genero"; importar detalles de categorias
//import CategoryLink from "./Link-genero"; importarde talles de links a categorias

function MenuCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${apiUrl}/api/products/count`);
      const result = await response.json();
      setCategories(result.data);
    };
    fetchData();
  }, []);
}
return (
  <section>
    <h2>Elegi tu Categoria</h2>
    <div>
      {categories.length === 0
        ? "Cargando..."
        : categories.map((category) => <MenuCategoryLink key={category.id} name={category.name} />)}
    </div>
  </section>
);

export default MenuCategories;
