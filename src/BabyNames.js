import React, { useState } from 'react'
import Data from './babyNamesData.json'
import Favourite from './Favourite';
import './App.css';
const cssStyle={

   borderRadius:'20px',
   padding:'5px',
    listStyleType:'none',
    width:'100%',
    display: 'flex',
    alignItems: 'center',
  justifyContent: 'center',
    flexWrap:'wrap',
  
}
//const color1=['#EC7EBE','#9DCB67','pink','#E2BA97','#9DCB55','#fe4a49' , '#2ab7ca',' #fed766']

const color1=['#FFB6C1','#2ab7ca'];


const BabyNames=()=>{
 
   const [fav,setFav]=useState([])
   const [moveBackId,setmoveBackId]=useState()
  //display favourite name
  function moveBack(id){
    document.getElementById(id).style.display="none"
 //  alert("++++."+ document.getElementById(id).style.display)
   
  //document.getElementById(id).style.backgroundColor="red"
   // document.getElementById(id).style.display="block";
  }

  function displayFav(event){
   
   
    let sex;
    
    if(event.target.style.border==="2px dotted purple"){
    
      sex='f'
    }else{
      sex='m'
    }
    
    
   
     let objFav=[{"id":event.target.id,"name":event.target.textContent,"sex":sex}]
    
    setFav(fav.concat(objFav));
    setmoveBackId(event.target.id);
   //
  document.getElementById(event.target.id).style.display="none";
  
    
  
  }
   
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
  //      const cssStyleNames={
  //       marginTop:'5px',
  //      display: 'flex',
  //      alignItems: 'center',
  //    justifyContent: 'center',
  //      flexWrap:'wrap',
     
  //  }
    return (
            <>
             
             <Favourite p={fav} moveBackId={moveBackId} moveBack={moveBack}/>
             
               
                  <div><hr style={{width:'700px',border:'1px solid #2ab7ca',}}></hr></div>

             <ul style={cssStyle} id="list">
           {               Data.map(function(obj){
                if(obj.sex==='f'){
                    return <li id={`z${obj.id}`} key={obj.id} style={cssStyleGirl} onClick={displayFav} class="name">
                    {obj.name}
                   
                    </li>

                }
                else{
                    return <li id={obj.id} key={obj.id} style={cssStyleBoy} onClick={displayFav} class="name">{obj.name}</li>

                }
                
               })
           }
        
       </ul>
      
      </>
    )
    
}
export default BabyNames;