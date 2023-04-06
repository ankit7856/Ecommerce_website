import React from 'react'
import { Link } from 'react-router-dom';
const Blogcard = () => {
  return (
    <div className='col-3'>
        <div className='blog-card'>
            <div className='card-image'>
                <img src='images/blog-1.jpg' className='img-fluid' alt='blog'/>
            </div>
            <div className='blog-content'>
                <p className='date'>1 jan,2023</p>
                <h5 className='title'>Recommendation System</h5>
                <p className='desc'>
                Sit pariatur reprehenderit officia occaecat ullamco.
                 Nulla ex nostrud tempor enim ex. 
                </p>
                <Link className='button' to = '/'>Read More</Link>
            </div> 
        </div>
    </div>
    
  );
};

export default Blogcard;
