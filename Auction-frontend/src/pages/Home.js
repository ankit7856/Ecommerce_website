import React from 'react'
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import Blogcard from '../components/Blogcard';
import { ProductCard } from '../components/ProductCard';
import SpecialProduct from '../components/specialproduct';
const Home = () => {
  return <>
  <section className='home-wrapper-1 py-5'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-6'>
          <div className='main-banner position-relative'>
            <img 
              src='images/lamp.png' 
              className='img-fluid rounded-3' 
              alt='main banner' 
            />
          <div className='main-banner-content position-absolute'>
              <h4>Hot Bid</h4>
              <h5>Lamp</h5>
              <p>Bid Ends in 23hrs 30mins <br />Highest Bid $5 </p>
              <Link className='button' to='/'>BUY NOW</Link>
          </div>
        </div>
      </div>
      <div className='col-6'>
        <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
         <div className='small-banner position-relative '>
           <img 
             src='images/Astro_toy.png' 
             width = '400'
             className='img-fluid rounded-3' 
             alt='main banner' 
           />
           <div className='small-banner-content position-absolute'>
               <h4>Best Bid</h4>
               <h5>Astro Toy</h5>
               <p>Bid Ends in 23hrs 30mins <br />Highest Bid $10 </p>
               
          </div>
        </div>
        <div className='small-banner position-relative '>
           <img 
             src='images/Astro_toy.png' 
             width = '400'
             className='img-fluid rounded-3' 
             alt='main banner' 
           />
           <div className='small-banner-content position-absolute'>
               <h4>Best Bid</h4>
               <h5>Astro Toy</h5>
               <p>Bid Ends in 23hrs 30mins <br />Highest Bid $10 </p>
               
          </div>
        </div> 
        <div className='small-banner position-relative '>
           <img 
             src='images/Astro_toy.png' 
             width = '400'
             className='img-fluid rounded-3' 
             alt='main banner' 
           />
           <div className='small-banner-content position-absolute'>
               <h4>Best Bid</h4>
               <h5>Astro Toy</h5>
               <p>Bid Ends in 23hrs 30mins <br />Highest Bid $10 </p>
               
          </div>
        </div> 
        <div className='small-banner position-relative '>
           <img 
             src='images/Astro_toy.png' 
             width = '400'
             className='img-fluid rounded-3' 
             alt='main banner' 
           />
           <div className='small-banner-content position-absolute'>
               <h4>Best Bid</h4>
               <h5>Astro Toy</h5>
               <p>Bid Ends in 23hrs 30mins <br />Highest Bid $10 </p>
               
          </div>
        </div> 
        </div>
      </div>
     </div>
    </div>
  </section>
  <section className='home-wrapper-2 py-5'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <div className='services d-flex align-items-center justify-content-between'>
            <div className="d-flex align-items-center gap-15">
              <img src='images/service.png' alt='services'/>
              <div>
                <h6>Free Shipping</h6>
                <p className='mb-0'>From all order over $50</p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-15">
              <img src='images/service-02.png' alt='services'/>
              <div>
                <h6>Coupons</h6>
                <p className='mb-0'>Save up to 10% off </p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-15">
              <img src='images/service-03.png' alt='services'/>
              <div>
                <h6>Support 24/7</h6>
                <p className='mb-0'>Chat assistance</p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-15">
              <img src='images/service-04.png' alt='services'/>
              <div>
                <h6>Reasonable Prices</h6>
                <p className='mb-0'>Saves your money</p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-10">
              <img src='images/service-05.png' alt='services'/>
              <div>
                <h6>Cash on delivery</h6>
                <p className='mb-0'>kudh ke bharose pr lo bhai"</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

  </section>
  <section className='home-wrapper-2 py-5'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
            <div className='d-flex gap align-items-center'>
              <div>
                <h6>Holly Black</h6>
                <p>10 Items</p>
              </div>
              <img src='images/book1.png' alt='book' width={100}/>
            </div>
            <div className='d-flex gap align-items-center'>
              <div>
                <h6>Quantum Mechanics</h6>
                <p>05 Items</p>
              </div>
              <img src='images/book2.png' alt='book' width={100}/>
            </div>
            <div className='d-flex gap align-items-center'>
              <div>
                <h6>Machine learning</h6>
                <p>02 Items</p>
              </div>
              <img src='images/book3.png' alt='book' width={110}/>
            </div>
            <div className='d-flex gap align-items-center'>
              <div>
                <h6>SOFA</h6>
                <p>01 Items</p>
              </div>
              <img src='images/sofa.png' alt='book' width={180}/>
            </div>
            
            <div className='d-flex gap align-items-center'>
              <div>
                <h6>Holly Black</h6>
                <p>10 Items</p>
              </div>
              <img src='images/book1.png' alt='book' width={100}/>
            </div>
            <div className='d-flex gap align-items-center'>
              <div>
                <h6>Quantum Mechanics</h6>
                <p>05 Items</p>
              </div>
              <img src='images/book2.png' alt='book' width={100}/>
            </div>
            <div className='d-flex gap align-items-center'>
              <div>
                <h6>Machine learning</h6>
                <p>02 Items</p>
              </div>
              <img src='images/book3.png' alt='book' width={110}/>
            </div>
            <div className='d-flex gap align-items-center'>
              <div>
                <h6>SOFA</h6>
                <p>01 Items</p>
              </div>
              <img src='images/sofa.png' alt='book' width={180}/>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>

  </section>
  <section className='feature-wrapper py-5 home-wrapper-2'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <h3 className='section-heading'>Feature Collection</h3>
        </div>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  </section>
  <section className='famous-wrapper py-5 home-wrapper-2'>
    <div className='container-xxl'>
      <div className='row image-grid'>
        <div className='col-3'>
          <div className='famous-card position-relative bg-light'>
            <img src='images/lamp.jpeg' className='img-fluid' alt='watch' />
              <div className='famous-content position-absolute'>
                <h5>Big Screen</h5>
                <h6>Premimum ads or Featured ads</h6>
                <p>paise do and we will help you to sell your products</p>
              </div>  
          </div>
        </div>
        <div className='col-3'>
          <div className='famous-card position-relative bg-light'>
            <img src='images/airpuri.png' className='img-fluid' alt='speaker'  />
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>Big Screen</h5>
                <h6 className='text-dark'>Premimum ads or Featured ads</h6>
                <p className='text-dark'>paise do and we will help you to sell your products</p>
              </div>  
          </div>
        </div>
        <div className='col-3'>
          <div className='famous-card position-relative bg-light'>
            <img src='images/airpuri.png' className='img-fluid' alt='speaker'  />
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>Big Screen</h5>
                <h6 className='text-dark'>Premimum ads or Featured ads</h6>
                <p className='text-dark'>paise do and we will help you to sell your products</p>
              </div>  
          </div>
        </div>
        <div className='col-3'>
          <div className='famous-card position-relative bg-light'>
            <img src='images/airpuri.png' className='img-fluid' alt='speaker'  />
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>Big Screen</h5>
                <h6 className='text-dark'>Premimum ads or Featured ads</h6>
                <p className='text-dark'>paise do and we will help you to sell your products</p>
              </div>  
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className='special-wrapper py-5 home-wrapper-2'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <h3 className='section-heading'>
            Current Biddings
          </h3>
        </div>
        <div className='row'>
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </div>
    </div>

  </section>
  <section className='popular-wrapper py-5 home-wrapper-2'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <h3 className='section-heading'>Popular Products</h3>
        </div>
        <div className='row'>    
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  </section>
  <section className='marque-wrapper py-5'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <div className='marquee-inner-wrapper card-wrapper'>
            <Marquee className='d-flex'>
              <div className='mx-4 w-25'>
                <img src='images/brand-01.png' alt='brand' />
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-02.png' alt='brand' />
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-03.png' alt='brand' />
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-04.png' alt='brand' />
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-05.png' alt='brand' />
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-06.png' alt='brand' />
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-07.png' alt='brand' />
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-08.png' alt='brand' />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className='blog-wrapper py-5 home-wrapper-2'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <h3 className='section-heading'>Our Latest Blogs</h3>
        </div>
        <Blogcard />
        <Blogcard />
        <Blogcard />
        <Blogcard />
      </div>
    </div>
  </section>
  </>;
  
}

export default Home