import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard title="gold aura" image="/images/1.jpeg" price="$20.00" rating={4.2} />
        <ProductCard title="silver majesty" image="/images/2.jpg" price="$25.00" rating={3.8} />
        <ProductCard title="black glazed" image="/images/3.jpeg" price="$35.00" rating={4.7} />
        <ProductCard title="silver glitter" image="/images/4.jpeg" price="$38.00" rating={4.0} />
      </div>
      
      <Footer />
    </div>
  );
}
