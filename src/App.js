import { useState } from 'react'
import Header from "./components/Header";
import FeedBackData from './data/feedBackData';
import FeedBackList from './components/feedBackList';
//import Card from './components/shared/card';

function App() { 
  const [feedBack, setFeedback] = useState
  (FeedBackData)

  return (
    <>
      <Header />
      <div className="container">
        <FeedBackList feedback={feedBack}/>
      </div>
      
    </>
  );
}

export default App;
