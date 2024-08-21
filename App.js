import { useEffect,useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Table from './components/table';
import { data } from './lib/dummy-data';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Fixture from './components/fixture.js';
import { fetchFixtures } from './lib/fetch-data';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

function App() {

  const [fixtures,setFixtures]=useState(data);

  

  // const fetchData= async()=>{
  //   const result=await fetchFixtures();
  //   setFixtures(result);
  // }

  // useEffect(()=>{
  //   fetchData();
  // },[])

  const refresh=()=>window.location.reload(true);

  return (
    <div className="w-full md:w-[700px] lg:w-[800px] m-auto">
      <NavBar/>

      <button className="btn btn-sm fixed bottom-3 right-12 z-40" style={{color:'#CCCCCC'}} onClick={refresh}>REFRESH</button>

      {fixtures.length==0?(
        <div className='h-screen bg-white w-full text-center p-10'>
          <CircularProgress color="success" />
        </div>
      ):(

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Table data={fixtures}/>}></Route>
          <Route path="/fixture/:matchID" element={<Fixture data={fixtures}/>}></Route>
        </Routes>
      </BrowserRouter>
    )}      
    </div>
  );
}

export default App;
