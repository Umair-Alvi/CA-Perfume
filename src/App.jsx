import React from 'react';
import ImageGallery from './Component/ImageGallery';
import ProductDetails from './Component/ProductDetails';

import './App.css'
import FrequentTogether from './Component/FrequentTogether';
import Baccarat from './Component/Baccarat';
import PerfumeNotes from './Component/PerfumeNotes';

function App() {


  return (
   <>
   {/* section 1  */}
    <div className="product-container">
      <div className="left-side">
        <ImageGallery />
      </div>
      <div className="right-side">
        <ProductDetails />
      </div>
    </div>
{/* section 2  */}
    <div className="FBT">
        <FrequentTogether />
    </div>

    {/* section 3 */}

    <div className="BACCARAT">
      <Baccarat />
    </div>

    {/* banner  */}

    <img src="/banner.png" alt="" className='banner' />

    {/* PERFUME NOTES section */}
    <div className="PERFUMENOTES">
      <PerfumeNotes />
    </div>
   </>
  )
}

export default App
