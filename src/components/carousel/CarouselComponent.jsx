import React from 'react'
import "./CarouselComponent.css"
import Banner1 from "../../assets/Cholan-banner.png"
// import Banner2 from "../../assets/cholan-e-banner2.png"

const CarouselComponent = () => {
    return (
        <>
            <div className='p-0'>
                <div className='flex items-center justify-center'>
                    <img src={Banner1} alt="Top banner" style={{width: "75em", height: "15em"}} />
                </div>
            </div>
        </>
    );
}


export default CarouselComponent;