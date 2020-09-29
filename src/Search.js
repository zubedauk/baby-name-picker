import React, { useState } from "react";
import Data from './babyNamesData.json';
import Favourite from './Favourite';
import './App.css';

const Search=()=>{
 
  
  
  const [input,setInput]=useState([]);
  
  //dispaly seacrsh names
  function name(event){
   // alert("c")
    let existName=[];
    //console.log(event.target.value);
    if(event.target.value===""){
      
       document.getElementById("nameList1").style.display="none";
       
    }else{
      
      document.getElementById("nameList1").style.display="block";
      //document.getElementById("nameList1").style=cssStyleNames;
      
      existName=Data.filter(function(obj){
      return obj.name.toLocaleLowerCase().slice(0,event.target.value.length).toLocaleLowerCase()===event.target.value.toLocaleLowerCase();
      })
      
     // alert("IN"+input)
     setInput(existName);
    }
    document.getElementById("fav").innerHTML="";
  }
  const cssStyleSearch={
   
    borderRadius:'20px',
    marginTop:'10px',
    listStyleType:'none',
    width:'100%',
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
  justifyContent: 'center',
    alignContent:'center',
    justifyItem:'center'
  }
  const cssStyleNames={
      marginTop:'5px',
     display: 'flex',
     alignItems: 'center',
   justifyContent: 'center',
     flexWrap:'wrap',
   
 }
 const color1=['#FFB6C1','#2ab7ca'];
let clr,clr1;
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
    
    <div style={cssStyleSearch}>
        <form style={{margin:'10px'}}>
            <input style={{width:'200px',height:'30px',border:'2px solid #2ab7ca'}}
              type="text" onChange={name}
            />
      </form>
      {/* //list of search name */}
      <div id="nameList1">
        <div  style={cssStyleNames} >
        {
          input.map(function(obj){
            
                if(obj.sex==='f'){
                  return <li key={obj.id} style={cssStyleGirl}>{obj.name}</li>
                }else{
                  return <li key={obj.id} style={cssStyleBoy}>{obj.name}</li>
                }
              })
          }
        </div>
      </div>
     
       
    </div>
    )
    
}
export default Search;


