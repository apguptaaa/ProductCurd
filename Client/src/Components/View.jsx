import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const View = () => {
    const { id } = useParams(); // product id from URL
    console.log(id);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/productview/${id}`);
                setProduct(res.data.product); // Assuming the response structure is { product: {...} }
            } catch (err) {
                console.error('Error fetching product:', err);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    return (
        <div className="max-w-xl mx-auto mt-10 p-4 border rounded shadow">
            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover mb-4 rounded"
            />
            <p className="text-xl text-gray-700 mb-2">Price: ₹{product.price}</p>
            <Link to="/displayProduct">
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                    🔙 Back to Product List
                </button>
            </Link>
        </div>
    );
};

export default View;