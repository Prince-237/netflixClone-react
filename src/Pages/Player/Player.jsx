import React, { useEffect } from 'react'
import './Player.css'
import back from '../../assets/back_arrow_icon.png'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();

  const nav = useNavigate();

  const [apiData , setApiData] = useState({
    name: "",
    key: "",
    type: "",
    published_at: "",
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjI5MTU1ZTk5NjQxODY2NzFmYjM4YmFiYzQxZmU2ZiIsIm5iZiI6MTc3OTI0NTUxNy43MzcsInN1YiI6IjZhMGQyMWNkNjY3MWRhNDc5NzBlMWFiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hDMkAtDBRTK3JbEKBcrVzGVHRCVoPmMSFyoxyaZ4aSI'
    }
  };



  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0]))
      .catch(err => console.error(err));
  }, [])

  return (
    <div className='player'>
      <img onClick={()=>{nav(-2)}} src={back} alt="Back" />
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title="All React Hooks Explained in 2 Hours | Complete React Hooks Tutorial with Example" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <div className="pi">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player