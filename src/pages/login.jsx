import React from 'react';
import Button from '../components/Button';
import Label from '../components/Label';
import Input from '../components/Input';

const handleClick = () =>{
      alert('button clicked');
}
export default function Login(){
      return <div>
            <h2> Login page</h2>
            <table align='center'>
                  <tr>
                        <td><Label lblName={'User Name'} lblStyle={{color:'black'}}/></td>
                        <td><Input type={Text} style={{color:'blue'}}/></td>
                  </tr>
                  <tr>
                        <td><Label lblName={'Password'} lblStyle={{color:'black'}}/></td>
                        <td><Input type={Text} style={{color:'black'}}/></td>
                  </tr>
                  <tr>
                        <td colSpan={'2'}><Button btnName={'Click Me!'} onClick={handleClick}
            btnStyle={{ color: 'black' }}></Button></td>
                  </tr>
            </table>
            
      </div>
}
