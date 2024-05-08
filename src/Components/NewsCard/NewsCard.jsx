import React from 'react'
import image from '../../Assets/Images/3d-morph-man-with-hazard-cones.jpg'


export default function NewsCard({article ,i , activeNewsCard }) {
  return <>
  <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
        <div className= { activeNewsCard === i ? 'h-100 card active rounded-2 pb-3 position-relative mb-2' : 'h-100 card rounded-2 pb-3 position-relative mb-2'}> 
        {article.urlToImage ? <img src={article.urlToImage} className='w-100' alt={article.title}/> : <img src={image}  alt={article.title}  className='w-100 h-50' /> }
            
            
            <div className='d-flex justify-content-between align-items-center px-2 p-1'>
                <p>{article.publishedAt?.split('T').slice(0,1).join("-")}</p>
                <p className=''>{article.source.name}</p>
            </div>
            <h3 className='fs-6 fw-bold pb-2 px-2'>{article.title}</h3>
            <p className=' pb-3 text-white-50 px-2'>{article.description?.split(" ").slice(0,10).join(" ")}....</p>
            <a className=' rounded-2 text-center my-2' href={article.url} target='_blank' >read more</a>
            
          
        </div>
        </div>
  </>
}
