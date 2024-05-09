import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect, useRef, useState } from 'react';
import NewsCards from './Components/NewsCards/NewsCards';
import wordsToNumbers from 'words-to-numbers';


function App() {
  const [newsArticles , setNewsArticles] = useState([]);
  const [activeArticle , setActiveArticle] = useState(-1);

  const alanBtnInstance = useRef(null);

  const alanKey = 'b71f38cf3bdf153b510baa56793d32e62e956eca572e1d8b807a3e2338fdd0dc/stage';

useEffect(()=>{
  alanBtnInstance.current = alanBtn({
    key: alanKey,
    onCommand: ({command, articles , number})=>{
      if(command === 'newHeadlines'){
        setNewsArticles(articles);
        setActiveArticle(-1);
      } else if(command === 'highlight'){
        setActiveArticle((prevAcriveCard)=> prevAcriveCard + 1)
      }  else if(command === 'openArticle'){

          const ParsedNumber = number.length >= 3 ? wordsToNumbers(number , {fuzzy: true}) :  number;
          const article = articles[ParsedNumber - 1];

          if(ParsedNumber > 50){

            alanBtnInstance.current.playText("Please try that again");
          } else if (article){

            window.open(article.url, "_blank");
            alanBtnInstance.current.playText("Opening....");
          } else{
            alanBtnInstance.current.playText("Please try that again");
          }
      }
    }
  })
},[])


  return <>
  <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
  </>
}

export default App;
