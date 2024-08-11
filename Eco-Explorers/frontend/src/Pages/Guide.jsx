//Latest
import axios from 'axios';
import all_product from '../assets/assets';
import GuideComponent from '../Components/GuideComponent';
import Navbar from '../Components/Navbar';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import OurFooter from '../Components/Footer';

const Guide = () => {
  // const [all_product, setAll_product] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [data, setData] = useState([])
  const fetchData = async () => {
    const url = "http://localhost:3333/guide";
  try {
    const res = await axios.get(url, {
      headers: {
        "Content-Type":"application/json"
      }
    })
    console.log(res.data)
    console.log(res.status)
    
    console.log(res.data.guide)
    setData(res.data.guide)
  } catch (error) {
    console.log(error)
    
  }
}
  useEffect(() => {
     
fetchData()

  }, [])

  return (
    <div className="guide bg-orange-600">
       <div className="fixed bottom-4 right-4">
        <Link to='/guide'
          
          
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg">
                  Register As a Guide
               </Link>
            </div>
      <Navbar />
      {/* Handle loading state
      {loading && <p>Loading...</p>}
      {/* Handle error state */}
      {/* {error && <p className="text-red-500">Error: {error}</p>}
      {/* Render products if available */}

      {/* {!loading && !error && all_product.length > 0 ? ( */}
      <div className="flex flex-wrap gap-3 justify-center mt-10">
        {data.map((product) => (
          <GuideComponent e={product}/>
        ))}
       
   
      </div>
      <hr />
      <OurFooter/>

    </div>
  );
};

export default Guide;
