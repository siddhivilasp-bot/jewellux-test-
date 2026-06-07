const products = [
  {
    id: 1,
    name: "Diamond Ring",
    price: "₹25,999",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
  },
  {
    id: 2,
    name: "Gold Necklace",
    price: "₹49,999",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
  },
  {
    id: 3,
    name: "Pearl Earrings",
    price: "₹14,999",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d",
  },
];

function Products({ addToCart }) {
  return (
    <section className="products">
      <h2>Featured Products</h2>

      <div className="product-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>

            <p>{item.price}</p>

            <button onClick={addToCart}>
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;