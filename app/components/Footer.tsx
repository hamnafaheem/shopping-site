import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4">
          <Link href="/contact" className="text-white">Contact Us</Link>
          <Link href="/policies" className="text-white">Policies</Link>
          <Link href="/terms" className="text-white">Terms of Service</Link>
        </div>
        <p className="mt-4">&copy; {new Date().getFullYear()} Our Shopping Site. All rights reserved.</p>
      </div>
    </footer>
  );
}
