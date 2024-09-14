import React, {useState, createContext} from 'react';

export const HouseContext = createContext();

export const HouseContextProvider = props => {
    const [property, setProperty] = useState([]);
    const [area, setArea] = useState([]);

    return (
        <HouseContext.Provider value = {{property, setProperty, area, setArea}}>
            {props.children}
        </HouseContext.Provider>
    );
}
