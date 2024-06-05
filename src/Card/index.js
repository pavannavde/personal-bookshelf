import React from 'react';
import './style.css';

const Card = ({item,Btext,handleClick,isButton}) => {
  
  
  return (
    <div className='card' key={item.author_key}>
    <h3>Title : {item.title}</h3>
    <p>Edition Count : {item.edition_count}</p> 
    {isButton && <button onClick={()=>handleClick(item.author_key)}>{Btext}</button> }
    </div>
  )
}

export default Card
