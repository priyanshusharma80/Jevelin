import React from 'react'
import Image from '../images/another.jpg'

const Introduction = () => {
    return (
        <div className="outer flex justify-between">
            <div className='w-1/4'></div>
            <div className='introduction w-1/3 flex flex-col justify-\'>
                <h2 className='font-extrabold text-4xl'>Jenna Berg</h2>
                <span className='text-cyan-500 font-bold'>Professional Dentist</span>
                <p className='text-sm pt-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo aliquid facere perspiciatis ipsam quod? Ipsum, numquam illo adipisci nemo ipsam similique sed aliquid ut a ducimus qui minus corrupti commodi dolores? Repudiandae, quam. Sint enim voluptate fugiat doloribus numquam recusandae maiores at, repellat accusamus voluptates!</p>
            </div>
            <div><img src={Image} alt="" /></div>
        </div>
    )
}

export default Introduction