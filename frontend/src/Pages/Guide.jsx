import Navbar from '../Components/Navbar';
import { useEffect, useState } from 'react';

const Guide = () => {
  const [all_product, setAll_product] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data when component mounts
    const fetchData = async () => {
      try {
        const response = await fetch('https://fb41-202-51-68-213.ngrok-free.app/guide');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched products:', data); // Log fetched data
        setAll_product(all_product);
      } catch (error) {
        console.error('Fetch error:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      console.log('Component will unmount');
    };
  }, );

  return (
    <div className="guide bg-slate-700">
      <Navbar />
      {/* Handle loading state
      {loading && <p>Loading...</p>}
      {/* Handle error state */}
      {/* {error && <p className="text-red-500">Error: {error}</p>}
      {/* Render products if available */}

      {/* {!loading && !error && all_product.length > 0 ? ( */}
        <div className="product-list">
          {all_product.map((product) => (
            <div key={product.id} className="product-item">
              {/* Customize the rendering based on your product structure */}
              <h2 className="text-white">{product.name}</h2>
              <p className="text-gray-400">{product.description}</p>
              {/* Add more product details here */}
            </div>
          ))}
        </div>
      ) : (
        !loading && !error && <p className="text-gray-300">No products found</p>
      )}
    </div>
  );
};

export default Guide;
