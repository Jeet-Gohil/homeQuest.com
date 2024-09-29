import React, { useContext, useEffect } from 'react';
import Map from '../Map';
import apiIndex from '../../apis/apiIndex';
import { HouseContext } from '../../Context/apiContext';


const GoogleMaps = () => {
  const {area, setArea} = useContext(HouseContext);
  const {mapCenter, setMapCenter} = useContext(HouseContext);
  const handleHover=async (lat, lng)=> {
    try{
      if (lat && lng) {
        setMapCenter({lat, lng});
        console.log(mapCenter);
      }
    }
    catch(err){}
  }
  useEffect(()=> {
    const fetchData = async()=>{
      try{
        const response = await apiIndex.get(`/`);
      setArea(response.data.topArea);
    
    }
    catch(err){}
      }
      fetchData();
  },[1]);
  return (
    <div>
      <div className='row'>
      <div className="col areaTable">
        <div className="table">
          <thead>
            {area && area.map && area.map((x)=> {
              return(
                <tr onMouseEnter={()=> {handleHover(x.area_coordinates.x, x.area_coordinates.y)}} 
                onMouseLeave={()=> {handleHover(null, null)}}>
              <th scope='col'>{x.area_name}</th>
              <th scope='col'>{x.rate}</th>
              <th scope='col'>{x.change_rate}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill custom-icon-up" viewBox="0 0 16 16">
  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg></th>
            </tr> 
              );
            })}
          </thead>
        </div>
        </div>
        <div className="col">
          <Map latitude={mapCenter.lat} longitude = {mapCenter.lng}/>
        </div>
        </div>
    </div>
  )
}

export default GoogleMaps
