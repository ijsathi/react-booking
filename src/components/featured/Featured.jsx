import React from 'react';
import './Featured.css';

const Featured = () => {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <img className='featuredImg' src="https://cdn.pixabay.com/photo/2018/03/20/14/00/sea-3243357__480.jpg" alt="cox's bazar" />
                <div className="featuredTitle">
                    <h1>Cox's Bazar</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img className='featuredImg' src="https://cdn.pixabay.com/photo/2018/03/20/14/00/sea-3243357__480.jpg" alt="cox's bazar" />
                <div className="featuredTitle">
                    <h1>Cox's Bazar</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img className='featuredImg' src="https://cdn.pixabay.com/photo/2018/03/20/14/00/sea-3243357__480.jpg" alt="cox's bazar" />
                <div className="featuredTitle">
                    <h1>Cox's Bazar</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
        </div>
    );
};

export default Featured;