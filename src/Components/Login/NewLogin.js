import React from 'react'
import vehicles from '../Images/vehicles.png'
const NewLogin = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-6'>
                    <div className='left-banner mx-auto my-auto text-white'>
                      <h1> Spare Part</h1>
                    </div>
                    <div className='vehicles'>
                    <img src={vehicles}/>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-6'>
                    <div className='right-banner'>
                        hiii
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewLogin