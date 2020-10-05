import React from 'react'
//mport Favourite from './Favourite';
import './App.css';
const color1=['#FFB6C1','#2ab7ca'];

const Row=(prop)=>{
   
   /////////////////////
  // const [moveBackId,setmoveBackId]=useState(null)
   ////////////////////////////////
    
    const cssStyleGirl={
        backgroundColor:'rgb(255,182,193)',
        color:'#800080',
        borderRadius:'25px',
        margin:'5px',
        width:'auto',
        fontSize:'18px',
        padding:'5px',
        border:'2px dotted purple'
       }
       const cssStyleBoy={
        backgroundColor:color1[1],
        color:'#00008B',
        borderRadius:'25px',
        margin:'5px',
        width:'auto',
        fontSize:'18px',
        padding:'5px',
        border:'2px solid red'
       }
       
    if(prop.obj.sex==='f'){
        
        return (
            <>
             
         {/* <Favourite p={fav}  moveBack={moveBack} moveBackId={moveBackId} /> */}
              
        
        <li id={prop.obj.id} key={prop.obj.id} style={cssStyleGirl} onClick={prop.fav} class="name">{prop.obj.name}</li>
            </>)
    }
    else{
        return (
            <>
            
             {/* <Favourite p={fav}  moveBack={moveBack} moveBackId={moveBackId} /> */}
             
        <li id={prop.obj.id} key={prop.obj.id} style={cssStyleBoy} onClick={prop.fav} class="name">{prop.obj.name}</li>
            </>)
    }
    
}
export default Row;