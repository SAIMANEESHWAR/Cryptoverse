import React from 'react';
import { Link } from 'react-router-dom';

export default function Trending(props) {
    const {
        trendingdata,themecolor

    } = props;
    console.log(trendingdata);
    //   const [imagecoins,setimagecoins]=useState(trendingdata.)
    return (
        <div>
            <div className='container'>
                <div class="p-5 text-center  rounded-3">
                    <h1 class="text-body-emphasis"> TRENDING-CURRENCY</h1>
                </div>
                <div id="carouselExampleDark" class="carousel carousel-dark slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>

                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">

                                <div class="col ">
                                    <div class={`card shadow-sm p-3  ${themecolor ? "bg-body-secondary" : ""}`}>
                                        <div className='d-flex '>
                                        <Link className='link-underline  link-underline-opacity-0' to={`/${trendingdata[0]['id']}`}>
                                            <img class="bd-placeholder-img rounded-circle me-3 border" width="120" height="120" src={trendingdata[0]['image']} role="img" aria-label="Placeholder" />
                                            </Link>
                                            <div className='mt-4'>
                                                <h2 class="fw-normal">{trendingdata[0]['symbol']}</h2>
                                                <p>BTC : <span className='text-success'>{trendingdata[0]['pricebtc']}</span></p>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <p>Name : {trendingdata[0]['name']}<br/>
                                            Marcket_Cap_Rank : {trendingdata[0]['market_cap_rank']}</p>
                                            <ul class="d-flex list-unstyled mt-auto">
                                                <li class="me-auto">
                                                <h2><i class="fa-regular fa-heart"></i></h2> 
                                                </li>
                                                <li class="d-flex align-items-center me-3">
                                                    <svg class="bi me-2" width="1em" height="1em"></svg>
                                                    <small>$ {trendingdata[0]['priceusd']}</small>
                                                </li>
                                                <li class="d-flex align-items-center">
                                                    <svg class="bi me-2" width="1em" height="1em"></svg>
                                                    <small>Score : {trendingdata[0]['score']+1}</small>
                                                </li>
                                                <li class="d-flex align-items-center">
                                                    <svg class="bi me-2" width="1em" height="1em"></svg>
                                                    <Link className='link-underline  link-underline-opacity-0' to={`/${trendingdata[0]['id']}`}> view </Link>
                                                    
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                                <div class="col ">
                                    <div class={`card shadow-sm p-3 ${themecolor ? "bg-body-secondary" : ""}`}>
                                        <div className='d-flex '>
                                        <Link className='link-underline  link-underline-opacity-0' to={`/${trendingdata[1]['id']}`}>
                                            <img class="bd-placeholder-img rounded-circle me-3 border" width="120" height="120" src={trendingdata[1]['image']} role="img" aria-label="Placeholder" />
                                            </Link>
                                            <div className='mt-4'>
                                                <h2 class="fw-normal">{trendingdata[1]['symbol']}</h2>
                                                <p>BTC : <span className='text-success'>{trendingdata[1]['pricebtc']}</span></p>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <p>Name : {trendingdata[1]['name']}<br/>
                                            Marcket_Cap_Rank : {trendingdata[1]['market_cap_rank']}</p>
                                            <ul class="d-flex list-unstyled mt-auto">
                                                <li class="me-auto">
                                                <h2><i class="fa-regular fa-heart"></i></h2> 
                                                </li>
                                                <li class="d-flex align-items-center me-3">
                                                    <svg class="bi me-2" width="1em" height="1em"></svg>
                                                    <small>$ {trendingdata[1]['priceusd']}</small>
                                                </li>
                                                <li class="d-flex align-items-center">
                                                    <svg class="bi me-2" width="1em" height="1em"></svg>
                                                    <small>Score : {trendingdata[1]['score']+1}</small>
                                                </li>
                                                <li class="d-flex align-items-center">
                                                    <svg class="bi me-2" width="1em" height="1em"></svg>
                                                    <Link className='link-underline  link-underline-opacity-0' to={`/${trendingdata[1]['id']}`}> view </Link>
                                                    
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                                <div class="col ">
                                <div class={`card shadow-sm p-3 ${themecolor ? "bg-body-secondary" : ""}`}>
                                        <div className='d-flex '>
                                        <Link className='link-underline  link-underline-opacity-0' to={`/${trendingdata[2]['id']}`}>
                                            <img class="bd-placeholder-img rounded-circle me-3 border" width="120" height="120" src={trendingdata[2]['image']} role="img" aria-label="Placeholder" />
                                            </Link>
                                            <div className='mt-4'>
                                                <h2 class="fw-normal">{trendingdata[2]['symbol']}</h2>
                                                <p>BTC : <span className='text-success'>{trendingdata[2]['pricebtc']}</span></p>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <p>Name : {trendingdata[2]['name']}<br/>
                                            Marcket_Cap_Rank : {trendingdata[2]['market_cap_rank']}</p>
                                            <ul class="d-flex list-unstyled mt-auto">
                                                <li class="me-auto">
                                                <h2><i class="fa-regular fa-heart"></i></h2> 
                                                </li>
                                                <li class="d-flex align-items-center me-3">
                                                    <svg class="bi me-2" width="1em" height="1em"></svg>
                                                    <small>$ {trendingdata[2]['priceusd']}</small>
                                                </li>
                                                <li class="d-flex align-items-center">
                                                    <svg class="bi me-2" width="1em" height="1em"></svg>
                                                    <small>Score : {trendingdata[2]['score']+1}</small>
                                                </li>
                                                <li class="d-flex align-items-center">
                                                    <svg class="bi me-2" width="1em" height="1em"></svg>
                                                    <Link className='link-underline  link-underline-opacity-0' to={`/${trendingdata[2]['id']}`}> view </Link>
                                                    
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>


                            </div>

                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                            <div class="col ">
                            <div class={`card shadow-sm p-3 ${themecolor ? "bg-body-secondary" : ""}`}>
                                        <div className='d-flex '>
                                        <Link className='link-underline  link-underline-opacity-0' to={`/${trendingdata[3]['id']}`}>
                                            <img class="bd-placeholder-img rounded-circle me-3 border" width="120" height="120" src={trendingdata[3]['image']} role="img" aria-label="Placeholder" />
                                            </Link>
                                            <div className='mt-4'>
                                                <h2 class="fw-normal">{trendingdata[3]['symbol']}</h2>
                                                <p>BTC : <span className='text-success'>{trendingdata[3]['pricebtc']}</span></p>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <p>Name : {trendingdata[3]['name']}<br/>
                                            Marcket_Cap_Rank : {trendingdata[3]['market_cap_rank']}</p>
                                            <ul class="d-flex list-unstyled mt-auto">
                                                <li class="me-auto">
                                               <h2><i class="fa-regular fa-heart"></i></h2> 
                                                </li>
                                                <li class="d-flex align-items-center me-3">
                                                    <svg class="bi me-2" width="1em" height="1em"></svg>
                                                    <small>$ {trendingdata[3]['priceusd']}</small>
                                                </li>
                                                <li class="d-flex align-items-center">
                                                    <svg class="bi me-2" width="1em" height="1em"></svg>
                                                    <small>Score : {trendingdata[3]['score']+1}</small>
                                                </li>
                                                <li class="d-flex align-items-center">
                                                    <svg class="bi me-2" width="1em" height="1em"></svg>
                                                    <Link className='link-underline  link-underline-opacity-0' to={`/${trendingdata[3]['id']}`}> view </Link>
                                                    
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                                <div class="col "> 
                                <div class={`card shadow-sm p-3 ${themecolor ? "bg-body-secondary" : ""}`}>
                                        <div className='d-flex '>
                                        <Link className='link-underline  link-underline-opacity-0' to={`/${trendingdata[4]['id']}`}>

                                            <img class="bd-placeholder-img rounded-circle me-3 border" width="120" height="120" src={trendingdata[4]['image']} role="img" aria-label="Placeholder" /></Link>
                                            <div className='mt-4'>
                                                <h2 class="fw-normal">{trendingdata[4]['symbol']}</h2>
                                                <p>BTC : <span className='text-success'>{trendingdata[4]['pricebtc']}</span></p>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <p>Name : {trendingdata[4]['name']}<br/>
                                            Marcket_Cap_Rank : {trendingdata[4]['market_cap_rank']}</p>
                                            <ul class="d-flex list-unstyled mt-auto">
                                                <li class="me-auto">
                                                <h2><i class="fa-regular fa-heart"></i></h2>                                                 </li>
                                                <li class="d-flex align-items-center me-3">
                                                    <svg class="bi me-2" width="1em" height="1em"></svg>
                                                    <small>$ {trendingdata[4]['priceusd']}</small>
                                                </li>
                                                <li class="d-flex align-items-center">
                                                    <svg class="bi me-2" width="1em" height="1em"></svg>
                                                    <small>Score : {trendingdata[4]['score']+1}</small>
                                                </li>
                                                <li class="d-flex align-items-center">
                                                    <svg class="bi me-2" width="1em" height="1em"></svg>
                                                    <Link className='link-underline  link-underline-opacity-0' to={`/${trendingdata[4]['id']}`}> view </Link>
                                                    
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                                <div class="col ">
                                <div class={`card shadow-sm p-3 ${themecolor ? "bg-body-secondary" : ""}`}>
                                        <div className='d-flex '>
                                        <Link className='link-underline  link-underline-opacity-0' to={`/${trendingdata[5]['id']}`}>
                                            <img class="bd-placeholder-img rounded-circle me-3 border" width="120" height="120" src={trendingdata[5]['image']} role="img" aria-label="Placeholder" /></Link>
                                            <div className='mt-4'>
                                                <h2 class="fw-normal">{trendingdata[5]['symbol']}</h2>
                                                <p>BTC : <span className='text-success'>{trendingdata[5]['pricebtc']}</span></p>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            
                                            <p>Name : {trendingdata[5]['name']}<br/>
                                            Marcket_Cap_Rank : {trendingdata[5]['market_cap_rank']}</p>
                                            <ul class="d-flex list-unstyled mt-auto">
                                                <li class="me-auto">
                                                <h2><i class="fa-regular fa-heart"></i></h2>                                                 </li>
                                                <li class="d-flex align-items-center me-3">
                                                    <svg class="bi me-2" width="1em" height="1em"></svg>
                                                    <small>$ {trendingdata[5]['priceusd']}</small>
                                                </li>
                                                <li class="d-flex align-items-center">
                                                    <svg class="bi me-2" width="1em" height="1em"></svg>
                                                    <small>Score : {trendingdata[5]['score']+1}</small>
                                                </li>
                                                <li class="d-flex align-items-center">
                                                    <svg class="bi me-2" width="1em" height="1em"></svg>
                                                    <Link className='link-underline  link-underline-opacity-0' to={`/${trendingdata[5]['id']}`}> view </Link>
                                                    
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
