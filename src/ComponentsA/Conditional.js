import React from 'react'
function Item({name,isPacked}){
        let itemContent = name;
        if(isPacked){
            itemContent=name+'done';
        }
       return (
        <li className='item'>
           {itemContent}
        </li>
       );
   
}
export default function Conditional() {
  return (
        <section>
            <h1>Lists of items</h1>
            <ul>
                <Item name="Hello" isPacked={true}/>
                <Item name="well" isPacked={true}/>
                <Item name="fine" isPacked={false}/>
            </ul>
        </section>
        
  );
}
