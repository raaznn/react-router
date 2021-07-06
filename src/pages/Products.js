import products from "../data/products";
import { Link } from "react-router-dom";
export default function Products() {
  return (
    <div>
      {" "}
      <ol>
        <h1>Products Page </h1>
        {products.map((prod) => {
          return (
            <li>
              {prod.name} <Link to={`products/item/${prod.id}`}>Detail</Link>{" "}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
