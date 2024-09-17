import React from "react";
import "../index.css"; // You can add your CSS here

interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  upvotes: number;
}

interface ProductCardProps {
  product: Product;
  onUpvote: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onUpvote }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h3>
        <p className="text-gray-600">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors hover:bg-blue-600"
            onClick={() => onUpvote(product.id)}
          >
            Upvote
          </button>
          <span className="text-gray-500 text-sm">
            {product.upvotes} Upvotes
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
