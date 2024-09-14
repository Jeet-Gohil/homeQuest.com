import React, { useContext, useEffect } from 'react';
import Map from '../Map';
import apiIndex from '../../apis/apiIndex';
import { HouseContext } from '../../Context/apiContext';


const GoogleMaps = () => {
  const {area, setArea} = useContext(HouseContext);
  useEffect(()=> {
    const fetchData = async()=>{
      try{
        const response = await apiIndex.get(`/`);
      setArea(response.data.topArea);
      console.log(area);
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
            {/* <tr>
              {area.map((x)=> {
                return (
                  <div>
                  <th scope='col'>{x.area_name} </th>
              <th scope='col'>{x.rate} </th>
              <th scope='col'>{x.change_rate} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill custom-icon-up" viewBox="0 0 16 16">
  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg></th>
</div>
                );
              })}
            </tr> */}
             <tr>
              <th scope='col'>Vesu</th>
              <th scope='col'>4.8 K/sq.ft</th>
              <th scope='col'>+1.3% <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill custom-icon-up" viewBox="0 0 16 16">
  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg></th>
            </tr> 
          </thead>
        </div>
        </div>
        <div className="col">
          <Map latitude={21.192572} longitude = {72.799736}/>
        </div>
        </div>
    </div>
  )
}

export default GoogleMaps
