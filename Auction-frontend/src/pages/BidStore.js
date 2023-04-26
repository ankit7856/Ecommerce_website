import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Meta from '../components/Meta';
const BidStore = () => {
  return ( 
  <>
    <Meta title={'Bid Store'} />
    <BreadCrumb title='Bid Store' />
     <div className="stop-wrapper home-wrapper-2 py-5 ">
      <div className="container-xxl">
        <div className="row">
          <div className="col-3">
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Shop By Categories</h3>
              <div>
                <ul>
                  <li>Clock</li>
                  <li>Table</li>
                  <li>Tv</li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Filter By</h3>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Product Tags</h3>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Recommended Product</h3>
            </div>
          </div>
          <div className='col-9'></div>
        </div>
      </div>
    </div>
  </>
  );
}

export default BidStore