'use client';

interface RatingProps {
  rating: number;
}

export default function Rating({ rating }: RatingProps) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="flex items-center mt-2">
      {Array.from({ length: fullStars }).map((_, index) => (
        <svg key={index} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09L5.68 12 0 7.636l7.062-.615L10 0l2.938 7.021L20 7.636 14.32 12l1.558 6.09L10 15z" />
        </svg>
      ))}
      {halfStar && (
        <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09L5.68 12 0 7.636l7.062-.615L10 0l2.938 7.021L20 7.636 14.32 12l1.558 6.09L10 15z" fillOpacity="0.5" />
        </svg>
      )}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <svg key={index} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09L5.68 12 0 7.636l7.062-.615L10 0l2.938 7.021L20 7.636 14.32 12l1.558 6.09L10 15z" />
        </svg>
      ))}
    </div>
  );
}
