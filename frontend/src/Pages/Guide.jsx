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
      <div className="product-list">
        {/* {all_product.map((product) => ( */}
        <div>
          <div className="flex p-4 items-center shadow-xl bg-white gap-2 w-[45vw] h-52">
            <div className="w-[35%] h-full">
              <img
                src="https://imgs.search.brave.com/tagkYKCXyNZyr9u7r8CrIMR0Qu7oDz0s14s2Cup1h2o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3Nub3cub3JnL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzA0/L2JlYXV0aWZ1bC1n/aXJsLXBob3RvXzIu/anBn"
                alt="photo"
                
                className="object-cover h-full w-full"
              />
            </div>
            <div className="flex flex-col">
              <p className='font-bold'>Anupama</p>
              <div className="text-gray-500">Kathmandu,Nepal</div>
              <hr />
              <div>
                <p>A girl who loves to to travel and make new friends</p>
                <hr />
                <div className='flex justify-evenly p-2'>
                  <div className='flex flex-col items-center justify-evenly'>
                    <div>Review</div>
                    <div>12</div>
                  </div>
                  <div className='flex flex-col items-center justify-between'>
                    <div>Review</div>
                    <div>12</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* )) */}
        </div>

      </div>
    </div>
  );
};

export default Guide;
