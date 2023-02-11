import React from 'react';
import './Intro.css'
import background from './images_anime/anime.png'

function Intro() {
    return (
            <section className="intro" style={{backgroundImage: `url(${background})`}}>
                <div className="intro_wrapper">
                    <div className="intro__span">

                    </div>
                    <div className="intro__btn">


                        <button className="More">Смотреть</button>
                    </div>
                </div>
            </section>
    )
}

export default Intro;