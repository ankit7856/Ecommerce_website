import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
const SpecialProduct = () => {
  return (
    <div className='col-4 mb-3'>
        <div className='special-product-card'>
            <div className='d-flex justify-content-between'>
                <div>
                    <img src='images/watch.png' className='img-fluid' alt='watch' width={250}/>
                </div>
                <div>
                    <div className='special-product-content'>
                        <h5 className='brand'>Apppill</h5>
                        <h6 className='title'>
                            Apppill series 10+
                        </h6>
                        <ReactStars count={5} 
                            size={24} value='3'
                            edit={true} 
                            activeColor='#ffd700'
                        />
                        <p className='price'>
                            <span className='red-p'>$20</span> &nbsp; <strike>$567</strike>
                        </p>
                        <div className='discount-till d-flex align-center gap-10'>
                            <p className='mb-0'>
                                <b>5</b>Days
                            </p>
                            <div className='d-flex gap-2 align-items-center'>
                                <span className='badge rounded-circle p-2 bg-warning bg-danger '>5</span>:
                                <span className='badge rounded-circle p-2 bg-warning bg-danger '>30</span>:
                                <span className='badge rounded-circle p-2 bg-warning bg-danger '>30</span>
                            </div>
                        </div>
                            <div className='prod-count my-3'>
                                <p className=''>Products: 5</p>
                                <div className="progress">
                                    <div className="progress-bar" 
                                        role="progressbar" 
                                        style={{width:'25%'}} 
                                        value={4}
                                        aria-valuenow="25" 
                                        aria-valuemin="0" 
                                        aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            <Link className='button' to='/'>
                                Place Bid
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
export default SpecialProduct;