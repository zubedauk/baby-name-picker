import React from 'react'
//import BabyNames from './BabyNames'
const Favourite=(prop)=>{
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
//     
   const color1=['#FFB6C1','#2ab7ca'];
   const cssStyleGirl={
    backgroundColor:color1[0],
    color:'#800080',
    borderRadius:'25px',
    margin:'5px',
    width:'auto',
    fontSize:'18px',
    padding:'5px',
    border:'2px dotted purple',
    
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
  
   function remove(event){
    document.getElementById(event.target.id).style.display="none";
    prop.moveBack(event.target.id)
   }
    return(
        <>
       
       <div style={cssStyle} id="fav">
            {
                prop.p.map(function(obj){
                    
                    if(obj.sex==='f'){
                        return <li id={obj.id} key={obj.id} style={cssStyleGirl} onClick={remove} class="name">
                    {obj.name}
                   
                    </li>

                }
                else{
                    return <li id={obj.id} key={obj.id} style={cssStyleBoy} onClick={remove} class="name">{obj.name}</li>

                }
                })
            }
          
       </div>
</>
    )
}
export default Favourite;