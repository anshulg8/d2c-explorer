// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./components/HomePage";
import CompanyDetailsPage from "./components/CompanyDetailsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import SubmitPage from "./components/SubmitPage";

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/submit" element={<SubmitPage />} />
          <Route path="/companies/:id" element={<CompanyDetailsPage />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
};

export default App;
