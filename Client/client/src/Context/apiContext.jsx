import React, {useState, createContext} from 'react';

export const HouseContext = createContext();

export const HouseContextProvider = props => {
    const [property, setProperty] = useState([]);
    const [area, setArea] = useState([]);
    const [mapCenter, setMapCenter] = useState({lat:21.192572, lng: 72.799736});

    return (
        <HouseContext.Provider value = {{property, setProperty, area, setArea
            , mapCenter, setMapCenter
        }}>
            {props.children}
        </HouseContext.Provider>
    );
}
