import React from 'react';
import Header from './Header'
import  { useState } from 'react';
import Price from './Price'
import axios from 'axios'

const App = () => {
    const [price, setPrice] = useState('')
    
    const handleClick = async () => {
        const result = await axios(
            `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`,
        )
        setPrice(result.data.bitcoin.usd + ' $')
    }
      

    return (
        <React.Fragment>
        <Header handleClick={handleClick} />
        <Price price={price}/>
        </React.Fragment>
    )
}


export default App