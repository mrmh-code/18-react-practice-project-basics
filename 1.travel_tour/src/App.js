import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [tours,setTours]=useState([]);

  const removeTour=(id)=>{
    const newTour=tours.filter(tour => tour.id!=id);
    setTours(newTour);
  }
  useEffect(()=>{
    fetch(url)
    .then(resp => resp.json())
    .then(data => setTours(data))
  },[])
  return <main>
    <Tours tours={tours}  removeTour={removeTour}/>
  </main>
}

export default App
