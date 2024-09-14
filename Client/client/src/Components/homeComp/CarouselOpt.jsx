import React, { useContext, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './gradient.css';
import { HouseContext } from '../../Context/apiContext';
import apiIndex from '../../apis/apiIndex';


const CarouselOpt = () => {
   const {property, setProperty}= useContext(HouseContext);
   useEffect(()=> {
    const fetchData = async ()=> {
        try{
            const response = await apiIndex.get(`/`);
            setProperty(response.data.propertyData);
            
        }
        catch(err){}
    }
    fetchData();
   }, []);
  return (
   <div className="container w-75 carouselContainer">
    <Carousel data-bs-theme = "dark">
         {property && property.map && property.map((x)=> {
            return (
            <Carousel.Item>
                <div className="container carouselItems pb-1 pt-1">
            <div className='container carouselImageContainer  w-75 mt-4 ms-3'>
                <img className='carouselImage' src= {x.image_data} alt="" />
            </div>
            <div className="container propertyDetail w-50 mt-4 ms-3 pe-2 d-flex-column-justify-content-center">
                <h2 className="propertyName pt-3 ps-3">{x.property_name}</h2>
                <p className="groupName ps-3">{x.group_name}</p>
                <p className="address ps-3 pt-1">{ x.address}</p>
                <h5 className="price ps-3 pt-3">{x.price}</h5>
                <p className="config ps-3 pt-2">{x.config}</p>
                <button type='submit' className='btn btn-success  pt-1'>Contact</button>
            </div>
           </div>
            </Carousel.Item>
            );
        })} 
         {/* <Carousel.Item>
           <div className="container carouselItems pb-1 pt-1">
            <div className='container carouselImageContainer  w-75 mt-4 ms-3'>
                <img className='carouselImage' src= {property.image} alt="" />
            </div>
            <div className="container propertyDetail w-50 mt-4 ms-3 pe-2 d-flex-column-justify-content-center">
                <h2 className="propertyName pt-3 ps-3">{property.propertyData && property.propertyData.property_name}</h2>
                <p className="groupName ps-3">{ property.propertyData && property.propertyData.group_name}</p>
                <p className="address ps-3 pt-1">{ property.propertyData && property.propertyData.address}</p>
                <h5 className="price ps-3 pt-3">{ property.propertyData && property.propertyData.price}</h5>
                <p className="config ps-3 pt-2">{ property.propertyData && property.propertyData.config}</p>
                <button type='submit' className='btn btn-success  pt-1'>Contact</button>
            </div>
           </div>
    </Carousel.Item>  */}
    </Carousel>
   </div>
  )
}

export default CarouselOpt;
