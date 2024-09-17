export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  upvotes: number;
}

export const fetchProducts = async (): Promise<Product[]> => {
  // For now, return static data. Replace this with your API call.
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "This is an awesome D2C product.",
      imageUrl: "https://via.placeholder.com/200",
      upvotes: 5,
    },
    {
      id: 2,
      name: "Product 2",
      description: "This is another great product.",
      imageUrl: "https://via.placeholder.com/200",
      upvotes: 8,
    },
    {
      id: 3,
      name: "Product 3",
      description: "This is yet another great product.",
      imageUrl: "https://via.placeholder.com/200",
      upvotes: 8,
    },
    {
      id: 4,
      name: "Product 4",
      description: "This is another great product.",
      imageUrl: "https://via.placeholder.com/200",
      upvotes: 8,
    },
    // Add more products as needed
  ];
  return products;
};
