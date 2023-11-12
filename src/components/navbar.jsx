import React from 'react';
import mycoins from '../photos/mycoins.jpg'

export default function Navbar(props) {
    const {
        setthemecolor,themecolor
    }=props;
    return (
        <div>
            {/* /bg-transparent bg-body-tertiary*/}
             <section  className={`navbar navbar-expand-lg ${themecolor ? "bg-dark-subtle" : "bg-body-tertiary"} fixed-top`} >
                <div className="container-fluid" style={{ width: "100%" }}>

                <div className='d-flex flex-row mb-1'>
                        <h2 className="mt-3" >CRYPTO-VER$E</h2>
                    </div>
                    
                    <div className='d-flex flex-row justify-content-end'>
                   
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                       <i class="fa-solid  fa-bars "></i>
                    </button>
                    </div>

   
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-1 mb-lg-0 navfont">

                            <li className="nav-item">
                            <button className='border-0 bg-transparent'onClick={() => setthemecolor(!themecolor)}><div id='navbarcolorid'>
                            {themecolor ? (
  <h2 className='mt-2 me-3'><i className="fa-solid fa-moon"></i></h2>
) : (
  <h2 className='mt-2 me-3'><i className="fa-regular fa-moon"></i></h2>
)}
                                </div></button> 

                                {/* <form className="d-flex" role="search">
                                   
                                        <button  className="nav-link active" aria-current="page">
                                        <div className="profilenavbar">
                                            <img  alt="" />
                                        </div>
                                        </button>
                                 
                                  
                                </form> */}
                            </li>
                           


                            <li className="nav-item">
                            

                                
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}
