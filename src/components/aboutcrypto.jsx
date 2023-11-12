import React from 'react';
import { Link } from 'react-router-dom';

export default function Aboutcrypto(props) {
    const {
        store
    } = props;
    console.log(store);

    return (
        <div>
            <Link className='link-underline  link-dark link-underline-opacity-0 ' to={store.datares.data.links.blockchain_site[0]}>
                <h2 className='mt-2'><i class="fa-solid fa-house"></i></h2> </Link>
            <div class="p-1  text-center align-items-center  rounded-3">
                <Link to={store.datares.data.links.blockchain_site[0]}> <div>
                    <img className='img-fluid bd-placeholder-img rounded-circle  border' src={store.datares.data.image.large} alt="Coin Image" />

                </div>
                </Link>
        <br/><br/><br/>
            </div>





            <div className=''>

                <div className=' d-flex m-3 '>

                    <h1>{store.datares.data.name}</h1><p className='mt-4'> ({store.datares.data.symbol})</p>
                </div>

                <h4 className='m-3'>Rank : <span>{store.datares.data.market_cap_rank}</span></h4>
                <div>

                    <h4 className='m-3'>Current Price : <span>{store.datares.data.market_data.current_price.usd}$</span></h4>
                    <h4 className='m-3'> Growth Rate :<span className='text-success'> {store.datares.data.market_data.market_cap_change_percentage_24h}%</span></h4>
                </div>
                



            </div>


        </div>
    )
}
