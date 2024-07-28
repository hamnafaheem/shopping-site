import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PoliciesPage() {
  return (
    <div className="min-h-screen flex flex-col  bg-blue-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8 bg-blue-100">
        <h1 className="text-4xl font-bold text-center mb-8 gradient-text">Policies</h1>
        <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-8 space-y-6  bg-blue-500">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
            <p className="text-gray-700">
              Your privacy is important to us. We are committed to safeguarding the information you provide to us. This privacy policy outlines how we collect, use, and protect your information.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Return Policy</h2>
            <p className="text-gray-700">
              We offer a 30-day return policy for items that are unused and in their original packaging. If you are not satisfied with your purchase, please contact us to initiate a return.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Shipping Policy</h2>
            <p className="text-gray-700">
              We offer free shipping on all orders over $50. Orders are processed within 1-2 business days and will arrive within 5-7 business days. Expedited shipping options are available at checkout.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
