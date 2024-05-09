import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
export default function NewsCards({articles , activeArticle}) {

  const infoCards = [
    { color: '#576F72', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#757F9A', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest sports news' },
    { color: '#536976', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#638889', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
  ];

  if(!articles.length){
    return <>
      <div className="container my-5">
        <div className='mb-5'>
        <h1 className='text-capitalize fs-1 display-1 text-center fw-bolder rounded-2 mx-auto  py-3 px-5'>Alan AI </h1>
      <p className='fw-bold text-center fs-4 text-truncate'>Say Hello To Alan</p>
        </div>
      
    <div className="row g-4">
      
   {infoCards.map((infoCard , i)=>{ return <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
    <div className='p-4 rounded-2 h-100 text-center' style={{backgroundColor: infoCard.color}}>
      <p className='fw-bolder'>{infoCard.title}</p>
      <p>{infoCard.info}</p>
      <p className='fw-bolder py-3'>{infoCard.text}</p>
    </div>
   </div>
   
   })}
    </div>
  
      </div>
    </>
  }

  return <>
   <div className="container my-5">
   <h1 className='text-capitalize fs-1 display-1 text-center fw-bolder rounded-2 mx-auto mb-5 py-3 px-5'>Alan AI </h1>

    <div className="row gx-4 gy-5">
    {articles?.map((article , index )=>{ return  <NewsCard article={article} activeArticle={activeArticle} index={index} /> 
    })}
    </div>
   </div>
  </>
}
