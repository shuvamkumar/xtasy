import React from 'react'
import "./Homepage.scss"
import clockImg from "../Assets/images/clock.png"
const Homepage = () => {
  return (
    <div className='container'>
        <div className='partOne'>
            <div className='headingEvents'>
                EXCITNG EVENTS FOR YOU
            </div>
            <div className='content'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque tenetur ipsa est. Sit, debitis consequatur.</div>
            <div className="clock">
            <img
            src={clockImg}
            alt=""
            className="clockimg"
          />
            </div>
        </div>
        <div className='partTwo'>
            <div className='cardContainer'>
            <div className='eventCards'>
                    <div className='cardText'>
                        <div>Fun</div>
                        <div>Events</div>
                    </div>
                </div>
                <div className='eventCards' style={{backgroundImage: "url(../../src/Assets/images/Group 7572.png)", backgroundSize:"contain"}}>
                <div className='cardText'>
                        <div>Fun</div>
                        <div>Events</div>
                    </div>
                </div>
            </div>
            <div className='cardContainer'>
                <div className='eventCards'>
                <div className='cardText'>
                        <div>Fun</div>
                        <div>Events</div>
                    </div>
                </div>
                <div className='eventCards'>
                <div className='cardText'>
                        <div>Fun</div>
                        <div>Events</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage