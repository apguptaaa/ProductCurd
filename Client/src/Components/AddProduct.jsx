import React from 'react'

function AddProduct() {
  return (
    <>
      <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-4 text-center text-gray-800">Add Product</h2>
        <form action="/add-product" method="POST" enctype="multipart/form-data">

          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">Product Name</label>
            <input type="text" name="name" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter product name" required />
          </div>


          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">Price</label>
            <input type="number" name="price" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="₹0.00" required />
          </div>


          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">Product Image</label>
            <input type="file" name="image" accept="image/*" class="w-full" required />
          </div>


          <div class="text-center">
            <button type="submit" class="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow">
              Add Product
            </button>
          </div>
        </form>
      </div>

    </>
  )
}

export default AddProduct