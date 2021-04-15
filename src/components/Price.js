import React from 'react'
import "bootstrap/dist/css/bootstrap.css"

const Price = ({price}) => {
    return (
        <div className='mw-100 mh-100 text-center '
        style={{backgroundColor: 'black'}}>
        <div className='p-5 bg-black mw-100 mh-100'>
        <h1 className='text-danger' >{price}</h1>
        </div>
        
        </div>
        
    )
}


export default Price