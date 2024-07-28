'use client';

import { useState } from 'react';
import { useCart } from '../context/CartContext';
import QuickViewModal from './QuickViewModal';
import Rating from './Rating';

interface ProductCardProps {
  title: string;
  image: string;
  price: string;
  rating: number;
}

export default function ProductCard({ title, image, price, rating }: ProductCardProps) {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ title, image, price, quantity: 1 });
  };

  return (
    <div className="product-card border rounded-lg shadow-lg p-4">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <Rating rating={rating} />
        <p className="mt-2 text-gray-600">{price}</p>
        <div className="mt-4 flex justify-between items-center">
          <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="bg-gray-500 text-white py-2 px-4 rounded" onClick={() => setIsQuickViewOpen(true)}>
            Quick View
          </button>
        </div>
      </div>
      {isQuickViewOpen && <QuickViewModal title={title} image={image} price={price} onClose={() => setIsQuickViewOpen(false)} />}
    </div>
  );
}
