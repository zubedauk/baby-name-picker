import React from 'react'
const Favourite=(prop)=>{
    const cssStyleNames={
        marginTop:'5px',
       display: 'flex',
       alignItems: 'center',
     justifyContent: 'center',
       flexWrap:'wrap',
     
   }
   const color1=['#FFB6C1','#2ab7ca'];
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
    return(
       <div style={cssStyleNames} id="fav">
            {
                prop.p.map(function(obj){
                    if(obj.sex==='f'){
                        return <li key={obj.id} style={cssStyleGirl}>{obj.name}</li>
                    }else{
                        return <li key={obj.id} style={cssStyleBoy}>{obj.name}</li>
                    }
                })
            }
          
       </div>

    )
}
export default Favourite;