import { Link } from "react-router-dom";

export default function () {
  return (
    <ul>
      {" "}
      <li>
        {" "}
        <Link to="/"> Home </Link>
      </li>{" "}
      <li>
        <Link to="/products"> Products </Link>
      </li>{" "}
      <li>
        <Link to="/about"> About Us </Link>
      </li>{" "}
    </ul>
  );
}
