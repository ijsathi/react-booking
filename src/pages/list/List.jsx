import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import { format } from 'date-fns';
import './list.css';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';
import useFetch from '../../hooks/useFetch';

const List = () => {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [dates, setDates] = useState(location.state.dates);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state.options);
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);
    const { data, loading, error, reFetch } = useFetch(`/hotels?city=${destination}&min=${min || 1}&max=${max || 9999}`);

    const handleClick = ()=>{
        reFetch();
    }
    return (
        <div>
            <Navbar />
            <Header type='list' />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="listTitle">Search</h1>
                        <div className="listItem">
                            <label>Destination</label>
                            <input type="text" name="" id="" placeholder={destination} />
                        </div>
                        <div className="listItem">
                            <label>Check-in date</label>
                            <span onClick={() => setOpenDate(!openDate)}>{`${format(dates[0].startDate, "dd/MM/yyyy")}  to ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>
                            {openDate && <DateRange
                                onChange={(item) => setDates([item.selection])}
                                minDate={new Date()}
                                ranges={dates}
                            />}
                        </div>
                        <div className="listItem">
                            <label>Options</label>
                            <div className="listOptions">
                                <div className="listOptionItem">
                                    <span className="listOptionText">Min price <small>per night</small></span>
                                    <input
                                        type="number"
                                        className="listOptionInput"
                                        onChange={e => setMin(e.target.value)} />
                                </div>
                                <div className="listOptionItem">
                                    <span className="listOptionText">Max price <small>per night</small></span>
                                    <input
                                        type="number"
                                        className="listOptionInput"
                                        onChange={e => setMax(e.target.value)} />
                                </div>
                                <div className="listOptionItem">
                                    <span className="listOptionText">Adult</span>
                                    <input type="number" className="listOptionInput" min={1} placeholder={options.adult} />
                                </div>
                                <div className="listOptionItem">
                                    <span className="listOptionText">Children</span>
                                    <input type="number" className="listOptionInput" min={0} placeholder={options.children} />
                                </div>
                                <div className="listOptionItem">
                                    <span className="listOptionText">Room</span>
                                    <input type="number" className="listOptionInput" min={1} placeholder={options.room} />
                                </div>
                            </div>
                        </div>
                        <button onClick={handleClick}>Search</button>
                    </div>
                    <div className="listResult">
                        {loading ? "Loading.." :
                            <>
                                {
                                    data.map((item) => (
                                        <SearchItem item={item} key={item._id} />
                                    ))
                                }
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;