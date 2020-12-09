import React, {useRef } from 'react';
import axios from 'axios';

function List(props) {
        
    const { user, setItem } = props;
    const color = useRef('')
    const prevItem = useRef('');

    const itemUrl = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/'
    if (color.current) {
        color.current.style.backgroundColor = 'white';
        color.current.style.color = 'grey';
    }
    
 
    function handleClick(e) {
        if (prevItem.current !== e.target.id) {
            axios.get(`${itemUrl}${e.target.id}.json`)
            .then(function (response) {
                e.target.style.backgroundColor = `rgb(54, 219, 248)`;
                e.target.style.color = 'white';
                setItem(response.data);
                color.current = e.target;
                prevItem.current = e.target.id;
            })
            .catch(function (error) {
                console.log(error);
            })
        }
        
    }
   
    return (
        <div className = 'list'>
            {user.map((item) => <button key={item.id} onClick={(e) => handleClick(e)} id={item.id} style = {{backgroundColor:'white'}}  >{item.name}</button>)}
        </div>

    )

}
export default List;