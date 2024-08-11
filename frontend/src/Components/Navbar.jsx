//Latest
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png'

const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const navigate = useNavigate();

   useEffect(() => {
      const tl = gsap.timeline();
      tl.fromTo(
         "li",
         { opacity: 0, y: 20 }, // Start state
         { opacity: 1, y: 0, duration: 0.8, delay: 0.1 } // End state
      );
   }, []);

   const handleMenuToggle = () => {
      setIsMenuOpen((prevState) => !prevState);
      console.log("Menu toggled"); // Debugging
   };

  const handleCloseMenu = () => {



    setIsMenuOpen(false);
    console.log('Close button clicked'); // Temporary alert for debugging

    navigate('/home');
  };
  

  return (
    <nav className='navbar bg-transparent p-4 shadow-md'>
      <div className='container mx-auto flex justify-between items-center'>
      <Link to='/' >  <img className='h-9' src={logo} alt="" /></Link>
        {/* <Link to='/' className='text-white text-xl font-bold'>NEPXTOUR</Link> */}
        <div className='flex items-center md:hidden'>
          <button
            className='text-white text-2xl'
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul
          className={`nav-menu md:flex md:space-x-6 text-white text-lg absolute md:relative top-0 left-0 w-full md:w-auto md:flex-row md:items-center transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 bg-transparent  md:bg-transparent z-20`}
        >
          <div className='absolute top-0 right-0 p-4 md:hidden'>
            <button
              className='text-white text-2xl'
              onClick={handleCloseMenu}
            >
              <FaTimes /> {/* Close button that cross one */}
            </button>
          </div>
          <li className='md:ml-4'><Link to='/attractions' className='hover:text-slate-50 block px-4 py-2 md:px-0'>Attractions</Link></li>

          <li className='md:ml-4'><Link to='/gallery' className='hover:text-slate-50 block px-4 py-2 md:px-0'>Gallery</Link></li>
          <li className='md:ml-4'><Link to='/contact' className='hover:text-slate-50 block px-4 py-2 md:px-0'>Contact</Link></li>
          <li className='md:ml-4'><Link to='/community' className='hover:text-slate-50 block px-4 py-2 md:px-0'>Community</Link></li>
          <li className='md:ml-4'><Link to='/loginsign' className='hover:text-slate-50 block px-4 py-2 md:px-0'>Login/SignUp</Link></li>
          <li className='md:ml-4'><Link to='/guides' className='hover:text-slate-50 block px-4 py-2 md:px-0'>Guides</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
