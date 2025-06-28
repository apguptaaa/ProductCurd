// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { deleteProduct, getProducts } from "./LocalApi";

// function DisplayProduct() {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/productdisplay");
//         setProducts(res.data.product); //product is being called from the productcontroller
//       } catch (err) {
//         console.error("Error fetching products:", err);
//       }
//     };

//     fetchProducts();
//   }, []);
//   console.log(products);

//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this product?"
//     );
//     if (!confirmDelete) return;

//     try {
//       await deleteProduct(id);
//       setProducts(products.filter((product) => product._id !== id)); // remove from state
//     } catch (err) {
//       console.error("Error deleting product:", err);
//     }
//   };

//   return (
//     <>
//       <div className="w-full max-w-5xl">
//         <div className="flex justify-center mb-4">
//           <Link to="/">
//             <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded shadow">
//               ➕ Add Product
//             </button>
//           </Link>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
//             <thead className="bg-gray-200 text-gray-700">
//               <tr>
//                 <th className="px-4 py-2 text-left">Product Name</th>
//                 <th className="px-4 py-2 text-left">Price</th>
//                 <th className="px-4 py-2 text-left">Image</th>
//                 <th className="px-4 py-2 text-left">Action</th>
//               </tr>
//             </thead>
//             <tbody className="text-gray-600">
//               {products.length > 0 ? (
//                 products.map((product) => (
//                   <tr key={product._id} className="border-t hover:bg-gray-100">
//                     <td className="px-4 py-3">{product.name}</td>
//                     <td className="px-4 py-3">₹{product.price}</td>
//                     <td className="px-4 py-3">
//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         className="w-12 h-12 object-cover rounded"
//                       />
//                     </td>
//                     <td className="px-4 py-3">
//                       <Link to={`/product/${product._id}`}>
//                         <button className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded text-sm ml-2">
//                           View
//                         </button>
//                       </Link>
//                       <Link to={`/editproduct/${product._id}`}>
//                         <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm">
//                           Edit
//                         </button>
//                       </Link>
//                       <button
//                         onClick={() => handleDelete(product._id)}
//                         className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm ml-2"
//                       >
//                         🗑 Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td className="px-4 py-3 text-center" colSpan="4">
//                     No products found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// export default DisplayProduct;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { deleteProduct } from "./LocalApi";

function DisplayProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/productdisplay");
        setProducts(
          res.data.product.map((p) => ({ ...p, showDropdown: false }))
        );
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return;

    try {
      await deleteProduct(id);
      setProducts(products.filter((product) => product._id !== id));
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-purple-100 py-10 px-4 lg:px-16">
      <div className="bg-white/70 backdrop-blur-md border border-gray-300 shadow-xl rounded-3xl p-8 w-full max-w-7xl mx-auto transition duration-500 hover:shadow-2xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-wide">
            🛒 Product Management
          </h1>
          <Link to="/">
            <button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-105 hover:from-green-500 hover:to-green-700 transition-all duration-300">
              ➕ Add Product
            </button>
          </Link>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-md">
          <table className="min-w-full bg-white rounded-2xl text-sm">
            <thead className="bg-gradient-to-r from-indigo-100 to-indigo-200 text-gray-700 font-semibold">
              <tr>
                <th className="px-6 py-4 text-left">Product Name</th>
                <th className="px-6 py-4 text-left">Price</th>
                <th className="px-6 py-4 text-left">Image</th>
                <th className="px-6 py-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {products.length > 0 ? (
                products.map((product) => (
                  <tr
                    key={product._id}
                    className="border-t hover:bg-gray-100 transition duration-200"
                  >
                    <td className="px-6 py-4">{product.name}</td>
                    <td className="px-6 py-4 font-medium text-gray-800">
                      ₹{product.price}
                    </td>
                    <td className="px-6 py-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-14 h-14 object-cover rounded-lg shadow-md"
                      />
                    </td>

                    {/* <td className="px-6 py-4 space-x-2">
                      <Link to={`/product/${product._id}`}>
                        <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full shadow-sm hover:scale-105 transition-all duration-200">
                          👁 View
                        </button>
                      </Link>
                      <Link to={`/editproduct/${product._id}`}>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-sm hover:scale-105 transition-all duration-200">
                          ✏️ Edit
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow-sm hover:scale-105 transition-all duration-200"
                      >
                        🗑 Delete
                      </button>
                    </td>  */}

                    <td className="px-6 py-4 relative">
                      <div className="relative inline-block text-left">
                        <div>
                          <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none"
                            onClick={() =>
                              setProducts((prev) =>
                                prev.map((p) =>
                                  p._id === product._id
                                    ? { ...p, showDropdown: !p.showDropdown }
                                    : { ...p, showDropdown: false }
                                )
                              )
                            }
                          >
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6v.01M12 12v.01M12 18v.01"
                              ></path>
                            </svg>
                          </button>
                        </div>

                        {product.showDropdown && (
                          <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                            <div className="py-1 text-sm text-gray-700">
                              <Link
                                to={`/product/${product._id}`}
                                className="block px-4 py-2 hover:bg-gray-100"
                              >
                                View
                              </Link>
                              <Link
                                to={`/editproduct/${product._id}`}
                                className="block px-4 py-2 hover:bg-gray-100"
                              >
                                Edit
                              </Link>
                              <button
                                onClick={() => handleDelete(product._id)}
                                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    className="px-6 py-6 text-center text-gray-500 italic"
                    colSpan="4"
                  >
                    No products found. Try adding one!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DisplayProduct;
