import React from 'react';

//import carousel
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

//import images
import illustration from '../Assets/images/illustration.png';
import logo from '../Assets/images/logo.png';


const Illustration = () => {
    return (
        <div className='container'>
            {/* <div id="image" className='row'>
                <img src={logo} alt="logo" />
            </div> */}
            <div id='carousel' className='row'>
                <Carousel showThumbs={false}>
                    <div>
                        <img src={illustration} alt='illustration'/>
                        <p className='legend'>Manage sales, inventory and other POS</p>
                    </div>
                    <div>
                        <img src={illustration} alt='illustration'/>
                        <p className="legend">Manage sales, inventory and other POS</p>
                    </div>
                    <div>
                        <img src={illustration} alt='illustration'/>
                        <p className="legend">Manage sales, inventory and other POS</p>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Illustration;
