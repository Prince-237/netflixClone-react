// import React from 'react'
import './TitleCards.css'
import cards from '../../assets/cards/Cards_data'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';



const TitleCards = ({title, category}) => {

  const [apiData , setApiData] = useState([]);

  const cardsRef = useRef();

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjI5MTU1ZTk5NjQxODY2NzFmYjM4YmFiYzQxZmU2ZiIsIm5iZiI6MTc3OTI0NTUxNy43MzcsInN1YiI6IjZhMGQyMWNkNjY3MWRhNDc5NzBlMWFiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hDMkAtDBRTK3JbEKBcrVzGVHRCVoPmMSFyoxyaZ4aSI'
  }
};


  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaX;
  }

  useEffect(() => {
    
fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
    cardsRef.current.addEventListener('wheel', handleWheel)
  }, [])


  return (
    <div className='title-cards'>
      <h2 className='mb-2'>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list flex gap-2.5 overflow-x-scroll" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card relative" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt="" className='h-25 min-w-50 border-4 cursor-pointer' />
            <p className='absolute bottom-2.5 right-2.5'>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards