import React from 'react';

class Header extends React.Component{
    render(){
        return(<div>
            <span>Welcom to Sample Program!!</span>
            <button style={{ backgroundColor: 'lightgrey', color: 'black', marginLeft: '400px' }}>Login</button>
            </div>
        )
    }
}

export default Header;