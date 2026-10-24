import { Link } from "react-router-dom";
import products from "../data/products.js";

function Home() {
  return (
    <div className="store">
      <nav className="navbar">
        <Link to="/" className="logo">THREADS.</Link>
        <span>New Collection 2026</span>
      </nav>

      <header className="hero">
        <p>STYLE THAT SPEAKS</p>
        <h1>Wear Your Story.</h1>
        <p>Discover your next favorite outfit.</p>
      </header>

      <main className="products-section">
        <h2>Our Collection</h2>
        <p className="section-subtitle">
          Simple pieces. Timeless style.
        </p>

        <div className="products-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />

              <div className="product-info">
                <p className="product-color">{product.color}</p>
                <h3>{product.name}</h3>
                <p className="price">{product.price} EGP</p>

                <Link
                  to={`/products/${product.id}`}
                  className="details-btn"
                >
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>© 2026 THREADS. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;