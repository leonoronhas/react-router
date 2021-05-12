import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <ul>
        <li>
          <Link to="/products/p1">Product 1</Link>
        </li>
        <li>
          <Link to="/products/p2">Book 2</Link>
        </li>
        <li>
          <Link to="/products/p3">Item 3</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
