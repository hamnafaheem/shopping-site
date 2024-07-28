'use client';

interface QuickViewModalProps {
  title: string;
  image: string;
  price: string;
  onClose: () => void;
}

export default function QuickViewModal({ title, image, price, onClose }: QuickViewModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <button onClick={onClose} className="absolute top-2 right-2">Close</button>
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="mt-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="mt-2 text-gray-600">{price}</p>
        </div>
      </div>
    </div>
  );
}
