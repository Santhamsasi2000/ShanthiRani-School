import React from 'react';

const TopperCard = ({rank,image,name,marks}) => {
  return (
    <div className='card'>
        
        <img className='card-img-top' src={image} alt={`${name}'s photo`} loading="lazy" />
        <div className='card-body'>
            <p className='card-title fw-bold fs-5 text-center'>{name}</p>
            <p className='card-text text-secondary text-center'>{marks}</p>
        </div>
        <p className='text-center text-uppercase fw-bold text-danger fs-4'>School {rank}</p>
    </div>
  )
}

export default TopperCard
