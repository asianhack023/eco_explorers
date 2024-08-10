//Latest
import all_product from '../assets/assets';
import GuideComponent from '../Components/GuideComponent';
import Navbar from '../Components/Navbar';
import { useEffect, useState } from 'react';

const Guide = () => {
  // const [all_product, setAll_product] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data when component mounts
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch('https://fb41-202-51-68-213.ngrok-free.app/guide');
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     const data = await response.json();
    //     console.log('Fetched products:', data); // Log fetched data
    //     setAll_product(all_product);
    //   } catch (error) {
    //     console.error('Fetch error:', error);
    //     setError(error.message);
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    // fetchData();

    return () => {
      console.log('Component will unmount');
    };
  },);

  return (
    <div className="guide bg-slate-700">
      <Navbar />
      {/* Handle loading state
      {loading && <p>Loading...</p>}
      {/* Handle error state */}
      {/* {error && <p className="text-red-500">Error: {error}</p>}
      {/* Render products if available */}

      {/* {!loading && !error && all_product.length > 0 ? ( */}
      <div className="flex flex-wrap gap-3 justify-center mt-10">
        {all_product.map((product) => (
          <GuideComponent />
        ))}
       
   
      </div>
    </div>
  );
};

export default Guide;
