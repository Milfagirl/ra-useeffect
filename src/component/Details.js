import React from 'react';

function Details(props) {
    const { item } = props;
   
        return (
       
            <div className='details'>
            <img src={item.avatar} alt='avatar'></img>
            <h2>{item.name}</h2>
            <div>City: {item.details.city}</div>
            <div>Company: {item.details.company}</div>
            <div>Position: {item.details.position}</div>
        </div>
   
    )
    
   
}

export default Details;