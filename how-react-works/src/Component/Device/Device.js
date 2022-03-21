import React from 'react';
import DeviceDetails from './DeviceDetails/DeviceDetails';

const Device = (props) => {
    // props.ram=13
    return (
        <div>
            <h2> I have : {props.name}</h2>
            <p>Price {props.price}</p>
            <DeviceDetails ram={props.ram}></DeviceDetails>
        </div>
    );
};

export default Device;