import React from 'react';
import useFetch from '../../hooks/useFetch';
import './propertyList.css';

const PropertyList = () => {
    const { data, loading, error } = useFetch("/hotels/countByType");

    const images = [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
        "https://media.cntraveler.com/photos/53da5aa96dec627b149e509d/master/w_1024,h_768,c_limit/royal-ethiad-suite-jumeirah-abu-dhabi-2.jpg",
        "https://content.r9cdn.net/res/images/horizon/ui/seoCommon/destinationtiles/seo_hotels.jpg?v=aeb8c67f83d5b9fd53ca97055fc8402800bf3ce4&cluster=4",
        "https://www.xotels.com/wp-content/uploads/2020/03/hotel-room-type-xotels-hotel-management-company.webp"
    ]
    return (
        <div className='pList'>
            {loading ? ("loading...") : (
                <>
                    {data &&
                        images.map((img, i) => (
                            <div key={i} className="pListItem">
                                <img src={img} alt="" className="pListImg" />
                                <div className="pLisTitles">
                                    <h1>{data[i]?.type}</h1>
                                    <h2>{data[i]?.count} {data[i]?.type}</h2>
                                </div>
                            </div>))}
                </>)}
        </div>
    );
};

export default PropertyList;