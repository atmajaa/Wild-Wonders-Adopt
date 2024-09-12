import React from 'react';
import Slider from "react-slick"; // Import Slider from react-slick
import lionImg from './lion.jpg';   // Import your images
import tigerImg from './tiger.jpg';
import jakelImg from './jakel.jpg';
import vanVihar from './van vihar.jpeg'
import Footer from './Footer';
const Home = () => {
  // Settings for the slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Change image every 3 seconds
    arrows: true // Optionally show previous/next arrows
  };

  return (
    <div className="relative h-screen">  {/* Ensure the parent div takes up the full screen height */}
         <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-white text-6xl font-bold">Van Vihar National Park & Zoo</h1>
  </div>
      {/* Slider Section */}

      <Slider {...settings}>
        <div>
          <img
            src={lionImg}  // Replace with your first image path
            alt="Leopard"
            class="w-full h-screen object-cover brightness-75"
          />
        </div>
        <div>
          <img
            src={tigerImg}  // Replace with your second image path
            alt="Tiger"
             class="w-full h-screen object-cover brightness-75"
          />
        </div>
        <div className='mb-36'>
          <img
            src={jakelImg} // Replace with your third image path
            alt="Jakel"
             class="w-full h-screen object-cover brightness-75"
          />
        </div>
      </Slider>
      <div class="grid grid-cols-2 divide-x pl-12">
        <div className='height:50% width: 50%'>
            <img src={vanVihar} 
            alt="Van vihar" />
        </div>
         <div className='px-7'>
            <h1 className='text-4xl font-serif font-semibold text-[#013220]'>Van Vihar National Park & Zoo</h1>
            <h3 class="text-gray-800 font-serif ">Van Vihar National Park and Zoo is one of the most revered National Park and Zoo of Central India and is a shining beacon in the field of conservation. It is an amazing world of winged creatures, free ranging ungulates and captive carnivores in the midst of greenery.
            </h3>
            <div className='mb-4'></div>
            <h3 class="text-gray-800 font-serif "> The park which is more popularly known as just “Van Vihar” is considered as a “must see” destination for tourists visiting Bhopal. The characteristic combination of rich wetland areas, meadows, pools of water at different places, rugged slopes, mixed bamboo vegetation along with grass covered plateau and areas of mixed plantations support the rich floral and faunal diversity in the area.
            </h3>
            <div className='mb-4'></div>
            <h3 class="text-gray-800 font-serif mb-28 ">
            This green oasis amidst the city of lakes also plays a very vital role as a carbon sink contributing to environmental health of Bhopal. It is situated right next to the famous Upper Lake of Bhopal also known as the “Bada Talab” which is a Ramsar Site and one of the two lakes of Bhoj Wetland.
            </h3>
         </div>
    </div>
    <div>
     <h1 className='text-center text-4xl font-serif font-semibold text-[#013220] mb-10'>Unique Features</h1>
    <div className="grid grid-cols-4 divide-x pl-8">
        <div className='h-80 bg-green-900 font-serif text-slate-50 text-2xl flex justify-center items-center  rounded-full'>National Park</div>
        <div className='h-80 bg-green-900 font-serif text-slate-50 text-2xl flex justify-center items-center  rounded-full'>Zoological Garden</div>
        <div className='h-80 bg-green-900 font-serif text-slate-50 text-2xl flex justify-center items-center  rounded-full'>Rescue Center</div>
        <div className='h-80 bg-green-900 mb-28 font-serif text-slate-50 text-2xl flex justify-center items-center  rounded-full'>Wild Cafe</div>
  </div>
</div>
<Footer></Footer>
    </div>
  );
}

export default Home;
