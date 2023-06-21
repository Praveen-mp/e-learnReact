import React from 'react'
import Button from 'react-bootstrap/esm/Button'
function AlertButton({mess,children}){
    return(
        <Button onClick={()=>alert(mess)}>{children}</Button>
    );
}
export default function EventHandling1() {
  return (
    <div>
        <AlertButton mess="Playing">Play Movie</AlertButton>
        <AlertButton mess="uploading">Uploading Image</AlertButton>
    </div>
  )
}
