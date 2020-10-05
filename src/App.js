import React from 'react';
import Names from "./BabyNames";
import Search from "./Search"; 
import './App.css';
const App = () => {
  const cssStyle={
    borderBottom:'3px solid #FFB6C1',
    borderTop:'3px solid #3ab7ca',
    borderLeft:'3px solid #9DCB67',
    borderRight:'3px solid #fe4a49',
    borderRadius:'30px',
    padding:'5px',
     listStyleType:'none',
     width:'80%',
     display: 'flex',
     flexDirection:'column',
     alignItems: 'center',
   justifyContent: 'center',
     flexWrap:'wrap',
   
 }
  return (
    <div className="App" >
      <div style={cssStyle}>
      <Search />
      <Names />
      </div>  
    </div>
  );
}

export default App;
