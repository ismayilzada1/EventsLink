import React from 'react';
import Slider from 'react-slick';
import './EventList.css';
import EventCard from '../../components/EventCard';

const EventList = ({ title, events }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: null,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="event-list-container" id={"eventsList"}>
            <div className="event-list-header">
                <h2 className="carousel-title">{title}</h2>
                <button className="see-all-button">See all</button>
            </div>
            <Slider {...settings} className="event-carousel">
                {events.map((event, index) => (
                    <EventCard
                        key={index}
                        image={event.image}
                        eventName={event.eventName}
                        date={event.date}
                        peopleCount={event.peopleCount}
                        price={event.price}
                    />
                ))}
            </Slider>
        </div>
    );
};

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: 'block',
                background: '#000',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                cursor: 'pointer',
                zIndex: 1,
            }}
            onClick={onClick}
        >
        </div>
    );
};

export default EventList;
