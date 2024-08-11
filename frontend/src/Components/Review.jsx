//Latest
import React from 'react'
import InfiniteSlider from './InfinitySlider'

export default function Review() {
    const slides=[
        {
            name: "Alex Nepali",
            address: "KTM",
            description:
               "Our guide, originally from abroad, has made Nepal their home, immersing themselves in its culture and landscapes for years. They offer a unique blend of local insight and global perspective, ensuring you experience the best of Nepal with their deep knowledge and passion.",
            image: "https://imgs.search.brave.com/hkP3jXwoOm1i5uptR6mkxniblo9EfrXJjc61Igxc1AQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wb3J0cmFpdC1z/bWlsaW5nLW1hbi1o/b2xkaW5nLWJhc2tl/dC13aGlsZS1zdGFu/ZGluZy1hZ2FpbnN0/LXJvY2tzXzEwNDg5/NDQtMjQwNjUwNTMu/anBnP3NpemU9NjI2/JmV4dD1qcGc",
         },
         {
            name: "Aamar Tamang",
            address: "Pokhara",
            description:
               "Knowledgeable guide with deep roots in Nepal. With a blend of local expertise and welcoming charm, Amar brings the country’s rich culture and stunning landscapes to life. His extensive experience and passion for sharing Nepal’s beauty ensure a memorable journey for every traveler.",
            image: "https://imgs.search.brave.com/iS-DRG0NfGaAiJc23XONRp-6mayCyNqh59kIFcnlC9Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE3/MTQ1MDMxL3Bob3Rv/L3BvcnRyYWl0LW9m/LXRpYmV0YW4td29t/YW4uanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWpkVm5HU3E1/UVhBYmJwRklmMU9W/S2FjaUxoR3hhc2dh/TDhJTkpmN2ZTMXM9",
         },
    ]
  return (
    <div className='font-poppins  mx-auto w-[100%] px-3 xl:px-32 md:px-16 md:mb-40 mb-16 md:mt-32 mt-10'>
        <p className='md:text-5xl text-3xl font-semibold text-center'>Words <span className="font-semibold text-orange-600">from</span> Our <span className="font-semibold text-orange-600">Customers</span> </p>
        <p className='md:text-base text-xs font-poppins font-normal text-center md:px-10 mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.....</p>
        <InfiniteSlider slides={slides}/>
    </div>
  )
}
