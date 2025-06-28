import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Form from "./Form";
import DisplayProduct from "./DisplayProduct";
import View from "./View";
import EditProduct from "./EditProduct";

const Layout = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-tr from-green-50 via-white to-blue-100 font-sans">
      
      {/* Navbar */}
      <header className="shadow-md sticky top-0 z-50">
        <Navbar />
      </header>

      {/* Main Content Area */}
      <main className="px-4 md:px-8 lg:px-16 py-6">
        <div className="max-w-7xl mx-auto bg-white/60 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl p-6">
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/displayProduct" element={<DisplayProduct />} />
            <Route path="/product/:id" element={<View />} />
            <Route path="/editproduct/:id" element={<EditProduct />} />
          </Routes>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-4">
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
