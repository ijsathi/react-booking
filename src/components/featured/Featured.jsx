import React from 'react';
import useFetch from '../../hooks/useFetch';
import './Featured.css';

const Featured = () => {
    const { data, loading, error } = useFetch("/hotels/countByCity?cities=Dhaka,Dublin,London");
    return (
        <div className='featured'>
            {loading ? ("Loading please wait") : (<>
                <div className="featuredItem">
                    <img className='featuredImg' src="https://cdn.pixabay.com/photo/2018/03/20/14/00/sea-3243357__480.jpg" alt="cox's bazar" />
                    <div className="featuredTitle">
                        <h1>Dhaka</h1>
                        <h2>{data[0]} properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img className='featuredImg' src="https://www.worldatlas.com/upload/65/4c/ce/shutterstock-1738979993.jpg" alt="dublin" />
                    <div className="featuredTitle">
                        <h1>Dublin</h1>
                        <h2>{data[1]} properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img className='featuredImg' src="https://media.cntraveler.com/photos/57461927f086c628440a1369/5:4/w_1920,h_1536,c_limit/ann-and-roy-butler-trail-austin-alamy-EF3GKY.jpg" alt="austin" />
                    <div className="featuredTitle">
                        <h1>London</h1>
                        <h2>{data[2]} properties</h2>
                    </div>
                </div>
            </>)}
        </div>
    );
};

export default Featured;