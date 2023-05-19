import {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom';
import axios from "axios"
import Box from '@mui/material/Box';
import { DataGrid, GridColDef} from '@mui/x-data-grid';

import Dep from './dep';

interface UserData {
    userId:Number,
    id:Number,
    title:String,
    body:String,
}
const initialUserState: UserData[] = [{
   userId:0,
   id:0,
   title:"",
   body:"",

  }];
const columns: GridColDef[] = [
    {field:"userId",headerName:"UserId", width: 90},
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'title',
      headerName: 'Title',
      width: 250,
      editable: false,
    },
    {
      field: 'body',
      headerName: 'Body',
      width: 450,
      editable: false,
    },
    
  ];
  
  
  
  function Home() {
    // console.log(Data);
    
    const [userdata, setUserdata] = useState<UserData[]>(initialUserState)
    const navigate=useNavigate();
    console.log();
    useEffect(()=>{
        if(localStorage.getItem("profile-data")==null) 
        {
            navigate(-1);
        }
        else{
            axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res)=>{
                // console.log(res);
                
                setUserdata ((res.data));
               
            })
            .catch((err)=>{
                console.log(err);
                
            })
    
        }

    },[])
  
    return (
        <>
        <h1>Data</h1>
      <Box sx={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={userdata}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          disableRowSelectionOnClick
        />
      </Box>
      <Dep />
        </>
        
    );
  }
  export default Home;








// export default home