import { motion } from "framer-motion";

function ProductCard({ product, addToCart }) {
  return (
    <motion.div
      className="product-card"
      whileHover={{ scale:1.05 }}
    >
      <img src={product.image} alt="" />

      <h3>{product.name}</h3>

      <p>{product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add To Cart
      </button>
    </motion.div>
  );
}

export default ProductCard;