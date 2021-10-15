
import '../components/SettingsBlock.css'
import React, { useState } from 'react';




const SettingsBlock = () =>{
    const [inputValue , setInputValue] = useState('default')
    return(
            <div className={'block-settings'}>
            <input  type = "text" onChange = {event => setInputValue(event.target.value)} />
            <img src={'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+ inputValue}/>
            </div>
    
        
    );
   
};








export default SettingsBlock;