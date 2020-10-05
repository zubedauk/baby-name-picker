import React, { useState } from 'react'
import Data from './babyNamesData.json'
import Favourite from './Favourite';

import Row from './Row'

//let cnt=0;
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




const BabyNames=()=>{
 
   
  // const [name,setName]=useState()
   const [fav,setFav]=useState([])
  
   //////////////////////////
   function moveBack(moveBackId1){
    
 
  let parent=document.getElementById("list");
  
 
  parent.children[moveBackId1].style.display="block"
  
  }
   ///////////////////////////////
   function displayFav(event){
    let sex;
    if(event.target.style.border==="2px dotted purple"){
      sex='f'
    }else{
      sex='m'
    }
     let objFav=[{"id":event.target.id,"name":event.target.textContent,"sex":sex}]
    setFav(fav.concat(objFav));
    
    
   
  document.getElementById(event.target.id).style.display="none";
    
    
  }
  
          
            return (
              <>
            <Favourite p={fav} moveBack={moveBack} /> 
            <div><hr style={{width:'700px',border:'1px solid #2ab7ca',}}></hr></div>

             <ul style={cssStyle} id="list">
           {               Data.map(function(obj){
            console.log(obj.id)
                           return <Row obj={obj} fav={displayFav}  />
                         })
           }
        
       </ul>
            
            </>
            )
            
          
    
}
export default BabyNames;