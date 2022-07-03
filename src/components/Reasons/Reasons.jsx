import React from 'react'
import './reasons.css'

import  image from '../../assets/image1.png'
import  image2 from '../../assets/image2.png'
import  image3 from '../../assets/image3.png'
import  image4 from '../../assets/image4.png'
import  nb from '../../assets/nb.png'
import  adidas from '../../assets/adidas.png'
import  nike from '../../assets/nike.png'
import  tick from '../../assets/tick.png'


const Reasons = () => {
  return (
    <div className='Reasons'>
        <div className='left-r'>

                <img alt='' src={image} />
                <img alt='' src={image2} />
                <img alt='' src={image3} />
                <img alt='' src={image4} />


        </div>



        <div className='right-r'>sag taraf

              <span>some reasons</span>

        <div className=''>
         

                <span className='stroke-text'>Why</span> 
                  <span>Choose Us?</span>
         
         
         </div>

    
     </div>
    </div>
  )
}

export default Reasons