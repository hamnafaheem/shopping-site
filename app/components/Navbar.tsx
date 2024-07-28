import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Home</Link>
        <div>
          <Link href="/cart" className="mr-4">Cart</Link>
          <Link href="/payment" className="mr-4">Payment</Link>
        </div>
      </div>
    </nav>
  );
}
