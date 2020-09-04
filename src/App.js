import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Chield from './Component/Chield';

export  const contexApi = createContext()

function App() {
  const [count, setCount] = useState(0)

  return (
    <contexApi.Provider value={[count, setCount]}>
    <div className='jumbotron text-center'>
      <h1>React Contex Api</h1>
      <p className='text-lead'><strong>Why</strong>: The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application. It's aimed at solving the problem of prop drilling</p>
    </div>
    <h1>This is from Home Component</h1>
    <p>Value is: {count}</p>
    <hr></hr>
    <Chield></Chield>
    </contexApi.Provider>
  );
}

export default App;
