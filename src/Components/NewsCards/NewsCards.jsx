import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
export default function NewsCards({articles , activeNewsCard}) {

  const infoCards = [
    { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest sports news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
  ];

  if(!articles.length){
    return <>
      <div className="container my-3">
    <div className="row g-4">
      <h1 className='text-info text-center fw-bolder mx-auto'>Alan AI </h1>
   {infoCards.map((infoCard , i)=>{ return <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
    <div className='p-4 rounded-2 h-100 text-center' style={{backgroundColor: infoCard.color}}>
      <p className='fw-bolder'>{infoCard.title}</p>
      <p>{infoCard.info}</p>
      <p className='fw-bold py-3'>{infoCard.text}</p>
    </div>
   </div>
   
   })}
    </div>
  
      </div>
    </>
  }

  return <>
   <div className="container my-5 py-5">
    <div className="row gx-4 gy-5">
    {articles?.map((article , i )=>{ return  <NewsCard article={article} activeNewsCard={activeNewsCard} key={i} /> 
    })}
    </div>
   </div>
  </>
}
