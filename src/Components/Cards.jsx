import React from 'react'
import Card from './Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCalendar, faClock } from '@fortawesome/free-solid-svg-icons'; // Importing necessary icons


const Cards = () => {

    const data = [{
        id: 1,
        icon: faPhone,
        heading: "Emergency Service",
        detail: "Aliquam erat volutpat. Nullam imperdiet sapien felis, non lobortis odio mattis in. Quisque dapibus aliquet dictum. Integer dapibus ullamcorper est, ac .",
        buttonText: "See More",
        color:"#B7E0FF"
    }, {
        id: 2,
        icon: faCalendar,
        heading: "DO YOU WANT TO MAKE AN APPOINTMENT",
        detail: "Aliquam erat volutpat. Nullam imperdiet sapien felis, non lobortis odio mattis in. Quisque dapibus aliquet dictum.",
        buttonText: "Book Now",
        color:"#7CF5FF"
    },
    {
        id: 3,
        icon: faClock,
        heading: "Opening Hours",
        detail: "Monday-Friday, Saturday-Sunday",
        buttonText: "Contact Us",
        color:"#7695FF"
    }]
    console.log(data);

    return (
        <>
        <div className="cards flex justify-center flex-row cardSection">
            {
                data.map((item) => {
                    return (
                        <Card
                        key={item.id}
                        icon={item.icon}
                        heading={item.heading}
                        detail={item.detail}
                        buttonText={item.buttonText}
                        color={item.color}
                        />
                    );
                })
            }
            </div>
        </>
    )
}

export default Cards