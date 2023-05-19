import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Data from "./dep.json"
import { Button } from '@mui/material';
import $ from "jquery"

export default function Dep() {
  const [checked, setChecked] = React.useState([false, false]);
  const [checked1, setChecked1] = React.useState([false, false, false]);
  const [collapse, setCollapse] = React.useState(true)
  const [collapse1, setCollapse1] = React.useState(true)

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, event.target.checked]);
      };
    
      const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, checked[1]]);
      };
    
      const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([checked[0], event.target.checked]);
      };
      
    const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked1([event.target.checked, event.target.checked,event.target.checked]);
      };
    
      const handleChange5 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked1([event.target.checked, checked1[1],checked1[2]]);
      };
    
      const handleChange6 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked1([checked1[0], event.target.checked,checked1[2]]);
      };
      const handleChange7 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked1([checked1[0],checked1[1], event.target.checked]);
      };
      const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }} className="Child">
          <FormControlLabel
            label="Support"
            control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
          />
          <FormControlLabel
            label="Customer_success"
            control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
          />
        </Box>
      );
      const children1 = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }} className="Child1">
          <FormControlLabel
            label="Graphic Design"
            control={<Checkbox checked={checked1[0]} onChange={handleChange5} />}
          />
          <FormControlLabel
            label="Product Design"
            control={<Checkbox checked={checked1[1]} onChange={handleChange6} />}
          />
            <FormControlLabel
            label=" Web Design"
            control={<Checkbox checked={checked1[2]} onChange={handleChange7} />}
          />
        </Box>
      );
      const handleclick=()=>{
        setCollapse(!collapse);
      //  const button = document.getElementById("button1");
      
      //  console.log(button);
       $(".Child").slideToggle();
       
      }
      const handleclick1=()=>{
        setCollapse1(!collapse1);
      
        $(".Child1").slideToggle();
        
        
      }
      React.useEffect(()=>{
        if(collapse)
      {$(".button1").html("-");}
      else{$(".button1").html("+");}

      },[collapse])
      React.useEffect(()=>{
        if(collapse1)
      {$(".button2").html("-");}
      else{$(".button2").html("+");}

      },[collapse1])
    
      return (
        <>
        <div>
        <Button className='button1' onClick={handleclick} style={{fontSize:"2rem"}}>-</Button>
          <FormControlLabel
            label="Customer_Service"
            control={
              <Checkbox
                checked={checked[0] && checked[1]}
                indeterminate={checked[0] !== checked[1]}
                onChange={handleChange1}
              />
            }
          />
          {children}
        </div>
        <div>
        <Button variant="text" className='button2'style={{fontSize:"2rem"}} onClick={handleclick1}>-</Button>

          <FormControlLabel
            label="Design"
            control={
              <Checkbox
                checked={checked1[0] && checked1[1] && checked1[2]}
                indeterminate={checked1[0] !== checked1[1] || checked1[1] !== checked1[2] }
                onChange={handleChange4}
              />
            }
          />
          {children1}
        </div>
        </>
        
      );





 
  
}