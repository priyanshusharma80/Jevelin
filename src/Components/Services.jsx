import React from 'react'

const Services = () => {

    const offers = [
        {
          imageUrl: "https://jevelin.shufflehound.com/medical/wp-content/uploads/sites/23/2018/09/icon3_0004_%EF%81%AE.jpg",
          heading: "Ophthalmology"
        },
        {
          imageUrl: "https://jevelin.shufflehound.com/medical/wp-content/uploads/sites/23/2018/09/icon3_0001_%EF%83%B1.jpg",
          heading: "Cardiology"
        },
        {
          imageUrl: "https://jevelin.shufflehound.com/medical/wp-content/uploads/sites/23/2018/09/icon3_0002_%EF%89%8E.jpg",
          heading: "Dentistry"
        },
        {
          imageUrl: "https://jevelin.shufflehound.com/medical/wp-content/uploads/sites/23/2018/09/icon3_0003_%EF%83%B0.jpg",
          heading: "Laboratory"
        },
        {
          imageUrl: "https://jevelin.shufflehound.com/medical/wp-content/uploads/sites/23/2018/09/icon3_0004_%EF%81%AE.jpg",
          heading: "Pediatrics"
        },
        {
          imageUrl: "https://jevelin.shufflehound.com/medical/wp-content/uploads/sites/23/2018/09/icon3_0005_%EF%88%9E.jpg",
          heading: "Radiology"
        }
      ];
      

  return (
    <div className='servicesSection flex flex-col justify-center services relative'>
        <h2 className='mt-8 font-extrabold text-3xl text-center'>How we can help you</h2>
        <div className="collection shadow-lg bg-white overflow-hidden rounded-lg m-10 flex flex-wrap cardstemp">

        {
            offers.map((item)=>{
                return <Service image={item.imageUrl} heading={item.heading}/>
            })
        }
        </div>
    </div>
  )
}

export default Services


const Service = ({image, heading}) =>{
    return(
        <div className="p-8 w-1/3 serviceContainer">
            <img className='m-2 w-20' src={image}/>
            <h2 className='m-2 font-bold'>{heading}</h2>
            <p className='m-2 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias inventore alias hic unde rerum rem?</p>
        </div>
    )
}