import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Navbar from '../../components/navbar/Navbar';
import './hotel.css';

const Hotel = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const photos = [
        {
            src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&w=1000&q=80",
            alt: "hotel-photo"
        },
        {
            src: "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            alt: "hotel-photo"
        },
        {
            src: "https://media.istockphoto.com/id/838103468/photo/interior-view-of-gorgeous-hotel.jpg?s=612x612&w=0&k=20&c=peSg1FxZfAonlNQlB_4Pu-d-4T60imo_YkvmVWMTbYI=",
            alt: "hotel-photo"
        },
        {
            src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/67/79/fe/alba-hotel.jpg?w=700&h=-1&s=1",
            alt: "hotel-photo"
        },
        {
            src: "https://images.indianexpress.com/2021/06/Welcomhotel-Tavleen-Chail_1200.jpg",
            alt: "hotel-photo"
        },
        {
            src: "https://static-new.lhw.com/HotelImages/Final/LW1202/lw1202_76407293_720x450.jpg",
            alt: "hotel-photo"
        }
    ];
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
            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={() => setOpen(false)} />
                    <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={() => handleMove("l")} />
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src} alt="" className='slideImg' />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={() => handleMove("r")} />
                </div>}
                <div className="hotelWrapper">
                    <button className='bookNow
                '>Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elton St 125 New york</span>
                    </div>
                    <span className="hotelDistance">Excellent location - 500m from center</span>
                    <span className="hotelPriceHighLight">book stay over $114 at this property and get a free airport taxi</span>
                    <div className="hotelImages">
                        {
                            photos.map((photo, i) => (
                                <div className="hotelImgWrapper">
                                    <img onClick={() => handleOpen(i)} src={photo.src} alt={photo.alt} className="hotelImg" />
                                </div>
                            ))
                        }
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailText">
                            <h1 className="hotelTitle">Stay in the heart of krakow</h1>
                            <p className="hotelDesc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quasi illum reiciendis veritatis, labore voluptate omnis nostrum consequuntur culpa a. Velit minus aperiam voluptatum illo porro molestiae inventore modi asperiores, dolore odit vitae qui excepturi, exercitationem ipsam! Iure ipsa sunt delectus illum ducimus. Quasi, esse ullam. Officiis quibusdam rem a.
                            </p>
                        </div>
                        <div className="hotelDetailPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, a?</span>
                            <h2><b>$980</b> (9 night) </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    );
};

export default Hotel;