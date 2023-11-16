import React, { useEffect } from 'react';
import { useState } from 'react';
import mycoins from '../photos/mycoins.jpg'
import profile from '../photos/photos/profile1.png';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


export default function Navbar(props) {
    const {
        setthemecolor, themecolor
    } = props;

    const navigate = useNavigate();

    const logout=()=>{
        sessionStorage.setItem('verifieduser',false);
        sessionStorage.setItem('displayName',  null);
        sessionStorage.setItem('email',  null);
        sessionStorage.setItem('photoURL',null);
        document.getElementById('closebtn').click();
        console.log(sessionStorage.getItem('verifieduser'))
        navigate('/');
    }
    // const [verified,setverified]=useState(sessionStorage.getItem('verifieduser'));
    //     const [user,setuser]=useState(JSON.parse(sessionStorage.getItem('user')));
    //     console.log(sessionStorage.getItem('user')[0]);
    //    useEffect(()=>{
    //     if(sessionStorage.getItem('verifieduser')){
    //         setuser(sessionStorage.getItem('user'));

    //     }
    //    },[])
    //    console.log(user,"rrr");
    return (
        <div>
            {/* /bg-transparent bg-body-tertiary  bg-dark-subtle*/}
            <section className={`navbar navbar-expand-lg ${themecolor ? "bg-transparent" : "bg-transparent"} fixed-top`} >
                <div className="container-fluid" style={{ width: "100%" }}>

                    <div className='d-flex flex-row mb-1'>
                    <Link className='link-underline  link-underline-opacity-0' to="/Home">
                    <h2 className="mt-3" ><i class="fa-brands fa-bitcoin text-warning"></i>-<span><i class="fa-brands fa-ethereum text-info"></i></span><span className='text-secondary'>E</span>R<span><i class="fa-solid fa-dollar-sign text-success"></i></span><span className='text-secondary'>E</span></h2>
                    </Link>
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
                                <button className='border-0 bg-transparent' onClick={() => setthemecolor(!themecolor)}><div id='navbarcolorid'>
                                    {themecolor ? (
                                        <h2 className='mt-2 me-3'><i className="fa-solid fa-moon"></i></h2>
                                    ) : (
                                        <h2 className='mt-2 me-3'><i className="fa-regular fa-moon"></i></h2>
                                    )}
                                </div></button>
                            </li>
                            <li className="nav-item">
                                <div className="d-flex " role="search">
                                    <button className="nav-link active rounded-circle " aria-current="page" type="button" data-bs-toggle="modal" data-bs-target="#exampleModalnavbar">
                                        <h2><i class="fa-solid fa-user"></i></h2>
                                    </button>
                                </div>

                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* <!-- Modal --> */}

<div class="modal fade" id="exampleModalnavbar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        
        <button type="button" id="closebtn" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body  p-3">
      <div>
      <div className='d-flex '>
          <img class="bd-placeholder-img rounded-circle me-3 border" width="120" height="120" src={sessionStorage.getItem('photoURL')} role="img" aria-label="Placeholder" />
          <div className='mt-4'>
              <h2 class="fw-normal">{sessionStorage.getItem('displayName')}</h2>
              
          </div>
      </div>
      <div>
      <p> Email : {sessionStorage.getItem('email')}</p>
      </div>
      </div>
      </div>
    
      <div class="modal-footer">

        <button type="button" onClick={logout} class="btn btn-secondary">Log Out</button>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}
