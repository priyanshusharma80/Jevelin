import React, { useEffect } from 'react'
import CountUP from 'react-countup';

const Numbers = () => {

  return (
    <div className='numbers w-3/5 mx-auto flex text-sm text-center justify-around items-center'>
        <div className="different">
            <h2 className='font-bold text-3xl pb-1'>
                <CountUP end={53} duration={3} />
            </h2>
            <hr />
            <p className='pt-2'>Certified <br /> Doctors</p>
        </div>
        <div className="different">
            <h2 className='text-3xl pb-1'>
            <CountUP end={48} duration={3} />
            </h2>
            <hr />
            <p className='pt-2'>Medical <br /> Services</p>
        </div>
        <div className="different">
            <h2 className='text-3xl pb-1'>
            <CountUP end={12} duration={3} />
            </h2>
            <hr />
            <p className='pt-2'>Different <br /> Affiliates</p>
        </div>
        <div className="different">
            <h2 className='font-bold text-3xl pb-1'>
            <CountUP end={96} duration={3} />
            </h2>
            <hr />
            <p className='pt-2'>Offered <br /> Programs</p>
        </div>
    </div>
  )
}

export default Numbers