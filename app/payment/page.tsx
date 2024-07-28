import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';
import Footer from '../components/Footer';

export default function PaymentPage() {
  const { cart } = useCart();

  const totalAmount = cart.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return total + price * item.quantity;
  }, 0);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Payment Cart</h1>
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
              </div>
            ))}
            <div className="text-right">
              <p className="text-xl font-bold">Total: ${totalAmount.toFixed(2)}</p>
            </div>
          </div>
        )}
        {cart.length > 0 && (
          <div className="mt-8">
            <button className="bg-green-500 text-white py-2 px-4 rounded">Proceed to Payment</button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
