//import the things I need
import { useState, useEffect } from 'react';

import getData from './utils/GetData';
import './App.css'

//functional component
function App() {
  //setup var
  //const [getter, setter] = useState(init);
  const [aboutObj, setAboutObj] = useState();
  const [loader, setLoader] = useState(false);

  //setup method
  useEffect (()=>{
    getData('about/')
      .then(json=>{
        setAboutObj(json);
        setLoader(true);
      })
  },[]);
  //my render
  if(!loader){
  return (
    <>
      <div className='stick'>
        <h1>Welcome to the iSchool Website!</h1>
        <div>... Menu goes here ...</div>
      </div>
      <h1>Loading...</h1>
    </>
  )
}

return(
  <>
    <div className='stick'>
        <h1>Welcome to the iSchool Website!</h1>
        <div>... Menu goes here ...</div>
      </div>
      <div className='App'>
        <div className='About'>
          <h2>{aboutObj.title}</h2>
          <h3>{aboutObj.description}</h3>
        </div>
        <div className='aboutQuote'>
          <h4 className='quote'>{aboutObj.quote}</h4>
          <h4>----- {aboutObj.quoteAuthor} -----</h4>
        </div>
      </div>
  </>
)
}

export default App
