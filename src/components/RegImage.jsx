import React from 'react'
import './RegImage.scss'
import circle from './assets/images/circle.png'
import proj from './assets/images/proj.png'
import light from './assets/images/light.png'

function RegImage(){
        return(
            <div className="image">
                <div className="circle">
                 <img src={circle} alt="#" className="cir"/>
                </div>
                <div className="proj">
                    <img src={proj} alt="#" className="pj" />
                </div>
                <div className="light">
                    <img src={light} alt="#" className="lt" />
                </div>
            </div>
        )
    }
    export default RegImage;
