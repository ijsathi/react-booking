import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Navbar from '../../components/navbar/Navbar';
import { SearchContext } from '../../context/SearchContext';
import useFetch from '../../hooks/useFetch';
import './hotel.css';

const Hotel = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const { data, loading, error } = useFetch(`/hotels/find/${id}`);

    const { dates, options } = useContext(SearchContext);

    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return diffDays;
    };
    console.log(dayDifference(dates[0].endDate, dates[0].startDate));
    const days = dayDifference(dates[0].endDate, dates[0].startDate);

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    }
    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === "l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
        }
        else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
        }
        setSlideNumber(newSlideNumber);
    }
    return (
        <div>
            <Navbar />
            <Header type="list" />
            {loading ? (
                "loading..."
            ) : (
                <div className="hotelContainer">
                    {open && <div className="slider">
                        <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={() => setOpen(false)} />
                        <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={() => handleMove("l")} />
                        <div className="sliderWrapper">
                            <img src={data.photos[slideNumber]} alt="" className='slideImg' />
                        </div>
                        <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={() => handleMove("r")} />
                    </div>}
                    <div className="hotelWrapper">
                        <button className='bookNow'>Reserve or Book Now!</button>
                        <h1 className="hotelTitle">{data.name}</h1>
                        <div className="hotelAddress">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span>{data.address}</span>
                        </div>
                        <span className="hotelDistance">Excellent location - {data.distance}m from center</span>
                        <span className="hotelPriceHighLight">book stay over ${data.cheapestPrice} at this property and get a free airport taxi</span>
                        <div className="hotelImages">
                            {
                                data.photos?.map((photo, i) => (
                                    <div className="hotelImgWrapper" key={i}>
                                        <img onClick={() => handleOpen(i)} src={photo} alt={data.name} className="hotelImg" />
                                    </div>
                                ))
                            }
                        </div>
                        <div className="hotelDetails">
                            <div className="hotelDetailText">
                                <h1 className="hotelTitle">{data.title}</h1>
                                <p className="hotelDesc">{data.desc}</p>
                            </div>
                            <div className="hotelDetailPrice">
                                <h1>Perfect for a {days}-night stay!</h1>
                                {/* <h1>Perfect for a 04-night stay!</h1> */}
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, a?</span>
                                <h2><b>${days * data.cheapestPrice * options.room}</b> ({days} night) </h2>
                                {/* <h2><b>$999</b> (04 night) </h2> */}
                                <button>Reserve or Book Now!</button>
                            </div>
                        </div>
                    </div>
                    <MailList />
                    <Footer />
                </div>)}
        </div>
    );
};

export default Hotel;