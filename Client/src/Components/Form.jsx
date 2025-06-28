// import React from "react";
// import { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { createProduct } from "./LocalApi";

// function Form() {
//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     image: null,
//   });
//   //console.log(formData);

//   const [msg, setMsg] = useState("");

//   // Input change handler
//   const handleChange = (e) => {
//     const { name, value, files } = e.target;

//     if (name === "image") {
//       setFormData({ ...formData, image: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     //console.log(FormData);
//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("price", formData.price);
//     data.append("image", formData.image);

//     // 👇 Properly print FormData contents
//     // for (let pair of data.entries()) {
//     //     console.log(pair[0] + ':', pair[1]);
//     // }
//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/productinsert",
//         data
//       );
//       setMsg("✅ Product Added Successfully");
//       //console.log(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   return (
//     <>
//       <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
//           Add Product
//         </h2>
//         <form
//           onSubmit={handleSubmit}
//           method="POST"
//           enctype="multipart/form-data"
//         >
//           {/* <!-- Product Name --> */}
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2">
//               Product Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Enter product name"
//               required
//             />
//           </div>

//           {/* <!-- Price --> */}
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2">
//               Price
//             </label>
//             <input
//               type="number"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="₹0.00"
//               required
//             />
//           </div>

//           {/* <!-- Image Upload --> */}
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2">
//               Product Image
//             </label>
//             <input
//               type="file"
//               name="image"
//               onChange={handleChange}
//               accept="image/*"
//               className="w-full"
//               required
//             />
//           </div>

//           {/* <!-- Submit Button --> */}
//           <div className="text-center">
//             <button
//               type="submit"
//               class="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow"
//             >
//               Add Product
//             </button>
//           </div>
//         </form>
//         {msg && <p className="mt-4 text-green-600">{msg}</p>}

//       </div>
//     </>
//   );
// }

// export default Form;

import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { createProduct } from "./LocalApi";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: null,
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("image", formData.image);

    try {
      await axios.post("http://localhost:5000/api/productinsert", data);
   setMsg("🎉Product added successfully to your shop");
      setFormData({ name: "", price: "", image: null });
    } catch (err) {
      console.error(err);
      setMsg("❌ Failed to add product.");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-50 via-white to-blue-100 py-12 px-4 lg:px-16">
      <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-3xl shadow-2xl p-8 backdrop-blur-md">
        <h2 className="text-3xl font-extrabold text-center text-green-700 mb-6">
          Add New Product
        </h2>

        <form
          onSubmit={handleSubmit}
          method="POST"
          encType="multipart/form-data"
          className="space-y-6"
        >
          {/* Product Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter product name"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Price (₹)
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="₹0.00"
            />
          </div>

          {/* Image Upload */}
          <div className="relative w-full">
            <label className="block text-sm  font-medium text-gray-600 mb-2">
              Upload Product Image
            </label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              accept="image/"
              required
              className="w-full bg-white px-4 py-2 rounded-lg border border-gray-300 focus:outline-none file:mr-4 file:py-2 file:px-7 file:rounded-md file:border-0 file:bg-amber-100 file:text-yellow-900 file:border-l-amber-900 hover:file:bg-yellow-200"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-green-500 to-green-700 text-white px-8 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition-all duration-300"
            >
              Add Product
            </button>
          </div>
        </form>

        {msg && (
          <p className="mt-6 text-center text-lg font-semibold text-green-600 animate-bounce">
            {msg}
          </p>
        )}

        {/* Back to List Button */}
        <div className="mt-6 text-center">
          <Link to="/displayproduct">
            <button className="text-sm text-gray-600 hover:underline hover:text-green-700 transition">
              Back to Product List
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Form;
