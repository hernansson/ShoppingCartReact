import React from 'react'
import firstImage from './img/medicaresize.jpeg'
import secondImage from './img/herramientoResize.jpg'
import thirdImage from './img/medicosResize.jpg'
import fourthImage from './img/ultimaResize.jpg'

export default function Carrousel() {


    return (

        <div className="carousel ">
            <div className="carousel-inner">

                <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="true"
                    defaultChecked="checked"></input>
                <div className="carousel-item ">
                    <img src={firstImage} />
                </div>

                <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="true"></input>
                <div className="carousel-item">
                    <img src={secondImage} />
                </div>

                <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="true"></input>
                <div className="carousel-item">
                    <img src={thirdImage} />
                </div>

                <input className="carousel-open" type="radio" id="carousel-4" name="carousel" aria-hidden="true" hidden="true"></input>
                <div className="carousel-item">
                    <img src={fourthImage} />
                </div>

                <label htmlFor="carousel-4" className="carousel-control prev control-1">‹</label>
                <label htmlFor="carousel-3" className="carousel-control prev control-4">‹</label>
                <label htmlFor="carousel-2" className="carousel-control next control-1">›</label>
                <label htmlFor="carousel-1" className="carousel-control prev control-2">‹</label>
                <label htmlFor="carousel-4" className="carousel-control next control-3">›</label>
                <label htmlFor="carousel-3" className="carousel-control next control-2">›</label>
                <label htmlFor="carousel-2" className="carousel-control prev control-3">‹</label>
                <label htmlFor="carousel-1" className="carousel-control next control-4">›</label>
                <ol className="carousel-indicators">
                    <li>
                        <label htmlFor="carousel-1" class="carousel-bullet">•</label>
                    </li>
                    <li>
                        <label htmlFor="carousel-2" class="carousel-bullet">•</label>
                    </li>
                    <li>
                        <label htmlFor="carousel-3" class="carousel-bullet">•</label>
                    </li>
                    <li>
                        <label htmlFor="carousel-4" class="carousel-bullet">•</label>
                    </li>
                </ol>
            </div>
        </div>

    )
}