import React from 'react'
const today=new Date();
function dateFormat(date){
    return new Intl.DateTimeFormat(
        'en-us',
        {weekday:'long'}
    ).format(date)
}
const lineColor={
    rowColor:{
       
    },
    theme:{
        backgroundColor:'black',
        color:'white'
    }
}
export default function Update() {
  return (
    <div>
        <h1>This is {dateFormat(today)}</h1>
        <ul style={lineColor.theme}>
          <li>improve the quality of the code</li>
        </ul>
    </div>
  )
}
