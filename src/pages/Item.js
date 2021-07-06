import products from "../data/products";
import { useParams } from "react-router-dom";

export default function Item() {
  const { id } = useParams();
  const itemDetail = products.find((p) => p.id === parseInt(id, 10));
  return (
    <div>
      {" "}
      <h1>Product Item Detail </h1>
      <table style={{ margin: "auto" }}>
        <tr>
          {Object.keys(itemDetail).map((h) => (
            <th> {h} </th>
          ))}
        </tr>
        <tr>
          {Object.keys(itemDetail).map((key) => (
            <td> {itemDetail[key]} </td>
          ))}
        </tr>
      </table>
    </div>
  );
}
