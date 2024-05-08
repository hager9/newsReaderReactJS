import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect, useState } from 'react';
import NewsCards from './Components/NewsCards/NewsCards';

function App() {
  const [newsArticles , setNewsArticles] = useState([]);
  const [activeNewsCard , setActiveNewsCard] = useState(0);

  const alanKey = 'b71f38cf3bdf153b510baa56793d32e62e956eca572e1d8b807a3e2338fdd0dc/stage';

useEffect(()=>{
  alanBtn({
    key: alanKey,
    onCommand: ({command, articles })=>{
      if(command === 'newHeadlines'){
        setNewsArticles(articles);
      } else if(command === 'highlight'){
          setActiveNewsCard((prevAcriveCard)=> prevAcriveCard+1 )
      }
    }
  })
},[])


  return <>
  <NewsCards articles={newsArticles} activeNewsCard={activeNewsCard}/>
  </>
}

export default App;
