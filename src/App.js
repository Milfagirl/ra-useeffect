import React, { useEffect, useState } from 'react';
import './App.css';
import List from './component/List';
import Details from './component/Details';
import axios from 'axios';

function App() {
  const [user, setUser] = useState([])
  const [item, setItem] = useState();
  const userUrl = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';
  useEffect(() => {
    axios.get(userUrl)
      .then(function (response) {
        setUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])
  return (
    <div className="App">
      <List user={user} setItem={setItem} />
      {item && <Details item={item} />}
    </div>
  );
}

export default App;
