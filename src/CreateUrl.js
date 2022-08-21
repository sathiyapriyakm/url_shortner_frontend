import React from 'react'
import {Paper,  Button } from '@material-ui/core'
import TextField from '@mui/material/TextField';
import {Navbar} from "./Navbar";
// import { Footer } from './Footer';
import { useState } from "react";
import { API } from './global.js';
import { useNavigate } from 'react-router-dom';


export const CreateUrl=()=>{

    const navigate=useNavigate();
    

    const paperStyle={padding :50,height:'40vh',width:"50vw", margin:"100px auto"}
    
    const btnstyle={margin:'auto',backgroundColor: "var(--yellow-theme-main-color)",border:"1px solid var(--yellow-theme-background-color:#1d1d1d)",fontSize:"14px"}

   
    const [long, setLong] = useState("");
    
    
   
    
    const createprocess = () => {  
        const createdurl={long:long}; 
        
        console.log(createdurl);
        fetch(`${API}/createshorturl`,
    {
        method:"POST",
        body: JSON.stringify(createdurl),
        headers:{"Content-Type":"application/json"},
    }).then((data)=>{
        data.json();
        console.log(data)})
    .then((data1)=>{
        console.log(data1);
        if(data1.message==="URL generated"){
            // login();
            // setLong("");
            // navigate("/showtable"); 
            navigate("/showtable") 
            console.log(`window alert${data1.message} `);
          }
        else {
            console.log(`window alert${data1.message} `);
            window.alert(`${data1.message}`);
        }
    }).catch((e)=> console.log("ERROR"))  
}

    return(
            
        <div>
            <div>
                <Navbar/>
            </div>
            
            <div  style={{display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid #000000"}}>
            <Paper elevation={10} style={paperStyle} className="paper-style">
                <form>
            <h3 className="h3-tag" style={{fontSize:"24px"}}>Create Shorten URL</h3>
               
                <TextField 
                label='Long URL' 
                id="outlined-basic" 
                style={{fontSize:"20px",margin:"20px 0px"}}
                name="url"
                fullWidth
                required
                value={long}
                onChange={event => setLong(event.target.value)}
                />
                
                
                <Button type='submit' 
                variant="contained" 
                fullWidth
                style={btnstyle} 
                onClick={() => {
                    createprocess()
                }}
                >Generate</Button>
                </form>
                
            </Paper>
            </div>
            </div>    
       
    )
}
