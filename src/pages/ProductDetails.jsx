import { Link, useParams } from "react-router-dom";
import products from "../data/products.js";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product Not Found</h2>
        <Link to="/">Back to Store</Link>
      </div>
    );
  }

  return (
    <div className="details-page">
      <nav className="navbar">
        <Link to="/" className="logo">THREADS.</Link>
        <Link to="/" className="back-link">← Back to Store</Link>
      </nav>

      <main className="details-container">
        <img
          className="details-image"
          src={product.image}
          alt={product.name}
        />

        <div className="details-info">
          <p className="product-color">{product.color}</p>
          <h1>{product.name}</h1>
          <h2>{product.price} EGP</h2>
          <p>{product.description}</p>

          <div className="color-info">
            <span>Color:</span>
            <strong>{product.color}</strong>
          </div>

          <Link to="/" className="details-btn">
            Continue Shopping
          </Link>
        </div>
      </main>
    </div>
  );
}

export default ProductDetails;