import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'

export const ProductCard = () => {
  return (
    <div className='col-3'>
        <Link className='product-card position-relative' to='/'>
            <div className='wishlist-icon position-absolute'>
                <Link to="/">
                    <img src='images/wish.svg' alt='wishlist'/>
                </Link>
            </div>
            <div className='product-image'>
                <img src='images/watch2.png' className='img-fluid' alt='product image' width={250}/>
                <img src='images/watch.png' className='img-fluid' alt='product image' width={250}/>
            </div>
            <div className='product-details'>
                <h6 className='brand'>SamSam Bhotch</h6>
                <h5 className='product-title'>Mast watch hai lele saale
                </h5>
                <ReactStars count={5} 
                    size={24} value='3'
                    edit={true} 
                    activeColor='#ffd700'
                />
                <p className='price'>$789</p>
            </div>
            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                    <Link to="/">
                    <img src='images/prodcompare.svg' alt='compare' />
                    </Link>
                    <Link to="/">
                    <img src='images/view.svg' alt='view' />
                    </Link>
                    <Link to="/">
                    <img src='images/add-cart.svg' alt='addcart' />
                    </Link>
                </div>
            </div>
        </Link>
    </div>
  )
}
