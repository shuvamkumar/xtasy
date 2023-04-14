import React from 'react'
import "./Sponsors.scss";
// import img1 from '../../src/Assets/images/';

const Sponsors = () => {
  return (
    <div className='sponsors'>
        <div className='headingSponsors'> 
            <div className='colorBar'></div>
            <div className='headText'>SPONSORS OF THIS YEAR</div>
            <div className='colorBar'></div>
        </div>
        <div className='slider'>
            <div className='slide-track'>
            {/* <div className='sponsorCard'  style={{backgroundImage:`url(${img1})`, backgroundSize:"cover"}}>A</div> */}
            <div className='sponsorCard'>B</div>
            <div className='sponsorCard'>C</div>
            <div className='sponsorCard'>D</div>
            <div className='sponsorCard'>E</div>
            {/* // */}
            <div className='sponsorCard'>A</div>
            <div className='sponsorCard'>B</div>
            <div className='sponsorCard'>C</div>
            <div className='sponsorCard'>D</div>
            <div className='sponsorCard'>E</div>
            {/* // */}
            <div className='sponsorCard'>A</div>
            <div className='sponsorCard'>B</div>
            <div className='sponsorCard'>C</div>
            <div className='sponsorCard'>D</div>
            <div className='sponsorCard'>E</div>
            {/*  */}
            <div className='sponsorCard'>A</div>
            <div className='sponsorCard'>B</div>
            <div className='sponsorCard'>C</div>
            <div className='sponsorCard'>D</div>
            <div className='sponsorCard'>E</div>
            </div>
        </div>
    </div>
  )
}

export default Sponsors