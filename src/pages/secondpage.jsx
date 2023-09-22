import React from 'react';
import bgimg from "../assets/background.png"
 
const Secondpage = () => {
    return (
        <>
            <div className="secondpagecontainer">
                <div className='backgrnd'></div>
                <img className='bgimg' src={bgimg} alt='backgroundimage'/>
                <div className='content'>
                    hellow
                    <div className='contentcontainer'>
                        Digital Interface
                    </div>
                </div>
            </div>
        </>
    );
};
 
export default Secondpage;