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
  const [name,setName]=useState(190);
    const favList=[];
   
   
   const [fav,setFav]=useState([])
  //display favourite name
  
  function displayFav(event){
    alert(event.target.tagName)
    let name1=event.target.textContent;
    let objFav=Data.filter(function(obj){
      return obj.name===name1;
    })
   
    event.target.textContent="";
   setFav(fav.concat(objFav));
    
  
  }
   
    const cssStyleGirl={
        backgroundColor:color1[0],
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
    return (
            <>
               <Favourite p={fav}/>
                  <div><hr style={{width:'700px',border:'1px solid #2ab7ca',}}></hr></div>

             <ul style={cssStyle} id="list">
           {               Data.map(function(obj){
                if(obj.sex=='f'){
                    return <li key={obj.id} style={cssStyleGirl} onClick={displayFav} class="name">
                    {obj.name}
                   
                    </li>

                }
                else{
                    return <li key={obj.id} style={cssStyleBoy} onClick={displayFav} class="name">{obj.name}</li>

                }
               })
           }
        
       </ul>
      
      </>
    )
    
}
export default BabyNames;