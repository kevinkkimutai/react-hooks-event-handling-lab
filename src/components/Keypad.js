import React from 'react';

function Keypad (){

    function handlePassword(event) {
        event.preventDefault();
        console.log("Entering password...")
    }

    return (
        <div>
            <input type="password" onChange={handlePassword} />
        </div>
    
    )
    
}

export default Keypad;