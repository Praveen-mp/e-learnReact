import React from 'react'
import { Button } from 'react-bootstrap'
export default function ToolBar() {
  return (
         <TandleClick onPlay={()=>alert('Playing')}
                  onUpload={()=>alert('upload')}/>
  )
}
function TandleClick({onPlay,onUpload}){
    return(
       <>
       <Button onClick={onPlay}>Play</Button>
       <Button onClick={onUpload}>Uploading</Button>
       </>
    );
}
