import React, { useState } from 'react'
function Panel({     //child component
    title,
    children,
    isActive,
    onShow
}){    
    return(   
     <section className='panel'>
        <h3>{title}</h3>
          {isActive?(<p>{children}</p>):(<button onClick={onShow}>show</button>)}
     </section>
    );
}
export default function LiftingState() {
      const [activeIndex,setIndex] = useState(0);
      return(
      <>
      <Panel isActive={activeIndex === 0} onShow={()=>setIndex(0)} title="tigers">We will come back soon</Panel>
      <Panel isActive={activeIndex === 1} onShow={()=>setIndex(1)} title="Lions">Will all can done for some reason</Panel>
      </>
      );
      
}


