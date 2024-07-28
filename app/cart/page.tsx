import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const handleRemove = (title: string) => {
    removeFromCart(title);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.title} className="flex justify-between items-center border p-4 rounded-lg shadow-lg">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover" />
                <div className="flex-1 ml-4">
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p className="text-gray-600">{item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <button className="bg-red-500 text-white py-2 px-4 rounded" onClick={() => handleRemove(item.title)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
        {cart.length > 0 && (
          <div className="mt-8">
            <button className="bg-blue-500 text-white py-2 px-4 rounded mr-4" onClick={clearCart}>
              Clear Cart
            </button>
            <Link href="/payment">
              <button className="bg-green-500 text-white py-2 px-4 rounded">Proceed to Payment</button>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
