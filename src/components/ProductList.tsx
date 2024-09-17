import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../services/productService";
import "../index.css"; // You can add your CSS here

interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  upvotes: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const productData = await fetchProducts();
      setProducts(productData);
    };

    getProducts();
  }, []);

  const handleUpvote = (id: number) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, upvotes: product.upvotes + 1 }
          : product
      )
    );
  };

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onUpvote={handleUpvote}
        />
      ))}
    </div>
  );
};

export default ProductList;
