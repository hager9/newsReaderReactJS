import React, { createRef, useEffect, useState } from 'react'
import image from '../../Assets/Images/global-connections-background-social-media-banner.jpg'


export default function NewsCard({article ,index , activeArticle }) {

  const [isActive , setIsActive] = useState(false);
  const activeStyles = {
    border: isActive? '5px solid #00838f' : '', 
    boxShadow: isActive? '0 0 10px rgba(0, 0, 0, 0.1)' : '', 
  };
  // const [elRefs , setElRefs] = useState([]);
  // const scrollToRef = (ref) => {window.scrollY( ref.current.offsetTop - 50)};


  useEffect(() => {

    if (activeArticle === index) {
      setIsActive(true);
    } else{
      setIsActive(false)
    }
  }, );

  // useEffect(()=>{
  //   setElRefs( (refs) => { Array(20).fill().map((_,j)  =>  refs[j] || createRef())} )
  // }, []);

  // useEffect(()=>{
  //   if(activeArticle === index && elRefs[activeArticle]){
  //     scrollToRef(elRefs[activeArticle])
  //   }
  // }, [index , activeArticle , elRefs])

  return <>
  <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
        <div className=  'h-100 d-flex flex-column justify-content-center align-items-center articleCard rounded-2' style={isActive? activeStyles : {}}> 
        {article.urlToImage ? <img src={article.urlToImage} width="150" height="150" className='w-100 h-100 rounded-top-2' alt={article.title}/> : <img src={image} width="150" height="150"  alt={article.title}  className='w-100 h-100 rounded-top-2' /> }
            
            
            <div className='d-flex w-100 justify-content-between align-items-start p-2'>
                <p>{article.publishedAt?.split('T').slice(0,1).join("-")}</p>
                <p>{article.source.name}</p>
            </div>
            <h3 className='fs-6 fw-bold px-2'>{article.title}</h3>
            <p className='text-white-50 px-2'>{article.description?.split(" ").slice(0,10).join(" ")}....</p>
            <a className=' rounded-2 text-center mb-2 ms-2 me-auto' href={article.url} target='_blank' >read more</a>
        </div>
        </div>
  </>
}
