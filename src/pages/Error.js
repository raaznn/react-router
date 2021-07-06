import { Link } from "react-router-dom";

export default function () {
  return (
    <div>
      <h1> 404 page not found </h1> <h3> Are you lost? </h3>
      <h5>
        {" "}
        Go back to <Link to="/"> Home </Link> page{" "}
      </h5>
    </div>
  );
}
