import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const products = [
  { title: "Product 1", image: "/images/1.jpeg", price: "$20.00", rating: 4.2 },
  { title: "Product 2", image: "/images/2.jpg", price: "$25.00", rating: 3.8 },
  { title: "Product 3", image: "/images/3.jpeg", price: "$35.00", rating: 4.7 },
  { title: "Product 4", image: "/images/4.jpeg", price: "$38.00", rating: 4.0 },
  { title: "Product 5", image: "/images/5.jpeg", price: "$40.00", rating: 3.5 },
  { title: "Product 6", image: "/images/6.jpeg", price: "$43.00", rating: 4.8 },
  { title: "Product 7", image: "/images/7.jpeg", price: "$50.00", rating: 4.1 },
    { title: "Product 8", image: "/images/8.jpeg", price: "$65.00", rating: 3.3 },
    { title: "Product 9", image: "/images/9.jpeg", price: "$62.00", rating: 4.3 },
  { title: "Product 10", image: "/images/10.jpeg", price: "$69.00", rating: 2.3 },
  { title: "Product 11", image: "/images/11.jpeg", price: "$61.00", rating: 2.6 },
  { title: "Product 12", image: "/images/12.jpeg", price: "$65.00", rating: 4.9 },

    

];

export default function ProductsPage() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            image={product.image}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
