import React from  'react';

const Button = ({btnName, onClick, btnStyle}) => {
    return <><button
        style={btnStyle}
        onClick={onClick}>
            {btnName}
        </button>
        </>
};

export default Button;