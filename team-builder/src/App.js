import React, {useState} from 'react';
import Form from './Form';
import TeamList from './TeamList';
import './App.css';

function App() {
  const [userArr, setUserArr] = useState([]);
  return (
    <div className="App">
      <Form userArr={userArr} setUserArr={setUserArr}/>
      <TeamList list={userArr}/>
    </div>
  );
}

export default App;
