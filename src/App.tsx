import React from "react";
import ProductList from "./components/ProductList";
import "./index.css"; // You can add your CSS here

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-extrabold text-gray-900">
            D2C Product Explorer
          </h1>
          <p className="mt-2 text-gray-600">
            Discover and upvote your favorite Direct-to-Consumer products!
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10">
        <ProductList />
      </main>
    </div>
  );
};

export default App;
