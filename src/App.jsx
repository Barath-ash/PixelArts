import React from 'react';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import ClothComponent from './Components/ClothComponent';
import Trending from './Components/Trending';

// Importing images
import img1 from './assets/Cloths/blackhoddie.jpg';
import img2 from './assets/Cloths/derin.jpg';
import img3 from './assets/Cloths/polo.webp';
import img4 from './assets/Cloths/cargopant.jpg';
import img5 from './assets/Cloths/blacktrousers.jpeg';
import img6 from './assets/Cloths/cargoshorts.jpg';
import img7 from './assets/Cloths/casuals.jpeg';
import img8 from './assets/Cloths/RDG0001_1_1_480x480.jpg';
import img9 from './assets/Cloths/t-shirt.webp';
import img10 from './assets/Cloths/whiteshoes.jpg';
import img11 from './assets/Cloths/watch.avif';
import img12 from './assets/Cloths/traditional.jpg';
import Explore from './Components/Explore';
import Details from './Components/Details';
import Footer from './Components/Footer';

function App() {
  // ✅ Use arrays instead of objects

  const imgLayer1 = [img1, img2, img3, img4, img5, img6];
  const namesLayer1 = ["Black Hoodie", "Denim Shirt", "Red Polo T-Shirt", "Cargo Jeans", "Black Trousers", "Cargo Shorts"];
  const pricesLayer1 = ["₹799/-", "₹599/-", "₹599/-", "₹999/-", "₹599/-", "₹499/-"];

  const imgLayer2 = [img7, img8, img9, img10, img11, img12];
  const namesLayer2 = ["Casual Shirts", "Jeans", "T-Shirt", "Sneakers", "Watches", "Traditionals"];
  const pricesLayer2 = ["₹799/-", "₹599/-", "₹599/-", "₹799/-", "₹599/-", "₹599/-"];

  return (
    <>
      <Navbar />
      <Banner />
      <Trending />
        
       <ClothComponent images={imgLayer1} names={namesLayer1} prices={pricesLayer1} />
       <Details/>
      <Explore/>
      <ClothComponent images={imgLayer2} names={namesLayer2} prices={pricesLayer2} />

<Footer/>
      
       
    </>
  );
}

export default App;
