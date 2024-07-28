'use client';

import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  const handleShopNowClick = () => {
    router.push('/products'); // Navigate to the products page
  };

  return (
    <div className="hero parallax">
      <h1 className="text-10xl md:text-3xl font-bold gradient-text">Welcome to Our Shopping Site</h1>
      <p className="mt-5 text-lg">Find the best products at the best prices.</p>
      <button className="mt-8 bg-blue-500 text-white py-2 px-4 rounded" onClick={handleShopNowClick}>
        Shop Now
      </button>
    </div>
  );
}
