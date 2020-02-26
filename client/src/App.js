import React, { useEffect, useState } from 'react';
import './App.css';
import List from './list-component/List';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

function App() {
  const [prs, setPrs] = useState([])

  useEffect (() => {
    // TODO create function that is going to bring back all the PRs from the user
  });


  return (
    <div className='leaderboard'>
      <div className ='mainTitle-container'>
        Your PRs dashboard
      </div>
      <List/>
    </div>
  );
}

export default App;