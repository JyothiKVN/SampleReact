import React from 'react';

const Label = ({lblName,lblStyle}) =>{
    return <label style={lblStyle}>
        {lblName}
    </label>
}

export default Label;