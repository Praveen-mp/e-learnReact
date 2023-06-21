import React, { useState } from 'react'
export default function SynchedInputs() {
    const [text,setText] = useState('');

    function handleChange(e){
        setText(e.target.value);
    }
    
    return(
        <>
        <section className='panel'>
            <Input label="firstInput" onChange={handleChange} value={text}/>
            <Input label="secondInput" onChange={handleChange} value={text}/>
        </section>
        </>
        
    );       
}
function Input({value,onChange,label}){
    
    return(
        <>
         <label>
         {label}
       {' '}
         <input value={value} onChange={onChange}/>
        </label>
        </>
       
       
    );
    
}


