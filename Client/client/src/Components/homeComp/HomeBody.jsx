import React from 'react';
import './gradient.css';
import CarouselOpt from './CarouselOpt';
import Body from './Body';
import GoogleMaps from './GoogleMaps';
const HomeBody = () => {
    
    
  return (
    <div>
    <div className=" container-fluid py-4">
        <div className="col spotLight"><h3>In SpotLight</h3>
            <h5>Find your best place to live with us.</h5>
        </div>
    </div>
    
      <CarouselOpt/>
      <Body/>
      <GoogleMaps/>
    </div>
  )
}

export default HomeBody;
