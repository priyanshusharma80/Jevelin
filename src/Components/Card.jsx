import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ icon, heading, detail, buttonText, color }) => {
    // console.log(icon);
    return (

        <div style={{backgroundColor:color}} className="card flex flex-col justify-around items-center mx-6 p-6 text-center w-1/4 bg-cyan-400 text-black rounded-md shadow-md">
            <FontAwesomeIcon icon={icon} />
            <h3>{heading}</h3>
            <p>{detail}</p>
            <button className='rounded-md bg-white text-sm px-2'>{buttonText}</button>
        </div>
    )
}

export default Card