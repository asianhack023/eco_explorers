import { FaSearch } from 'react-icons/fa';
import Navbar from '../Components/Navbar.jsx';
import gsap from 'gsap';
import hackvideo from '../assets/hack.mp4';
import { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
            '.wonder',
            { opacity: 0, y: 40 }, // Start state
            { opacity: 1, y: 0, duration: 0.5, delay: 1} // End state
        );

        tl.fromTo('.text',
            { opacity: 0, y: 40 }, // Start state
            { opacity: 1, y: 0, duration: 0.5, delay: 0.1 } // End state
        );
    }, []); 

    return (
        <div className='relative h-screen w-screen overflow-hidden'>
    
            <div className="absolute top-0 left-0 w-full z-10">
                <Navbar />
            </div>

            <video 
                src={hackvideo} 
                autoPlay 
                muted 
                loop 
                className='h-full w-full object-cover'
            />

            <div className='absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-center z-20 px-4 md:px-8 lg:px-16'>
                <h1 className='wonder text-white text-2xl md:text-3xl lg:text-4xl mb-4'>Wonder More Worry Less</h1>
                <div className='text flex flex-col sm:flex-row justify-center items-center'>
                    <input 
                        type='text' 
                        placeholder='Find Your Next Adventure......' 
                        className='p-3 border-white border-2 bg-transparent w-full sm:w-[21rem] text-slate-400 rounded-l'
                    />
                    <FaSearch className='search text-white text-xl sm:text-2xl ml-2 mt-2 sm:mt-0' />
                </div>
            </div>
        </div>
    );
}

export default Home;
