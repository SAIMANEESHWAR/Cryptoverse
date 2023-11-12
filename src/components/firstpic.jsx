import React from 'react';
import firstpic from '../photos/coins.jpeg';

export default function Firstpic(props) {
    const {
        themecolor
    }=props;
    const sectionStyle = {
        backgroundImage: ` ${themecolor ? "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))" : "linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))"}, url(${firstpic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        top: '0',
        left: '0',
        width: '100%',
        height: '100vh',
      };
  return (
    <div>
 <section style={sectionStyle}>
              <br></br>
          <br></br>
          <br></br>
                {/* <div className="container-fluid  " style={{ width:"100%",height:"90vh"}}>
                    <div className="row p-4 pe-3 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3   mt-3" >
                        <div className="col-lg-7 p-3 p-lg-5  pt-lg-3" style={{ marginTop: '310px' }}>
                            <div className='justify-content-center align-middle'>
                                <h1 className="display-4 fw-bold mt-3   text-info-emphasis align-self-start">MY</h1>
                                <h1 className="display-4 fw-bold  mt-3 fs-1 text-success-emphasis ms-4 align-self-center">CRYPTO</h1>
                                <h1 className="display-4 fw-bold mt-3 fs-1 text-success ms-5 align-self-end">VERSE</h1>
                            </div>
                            <div className="d-grid gap-2 mt-3 ms-5 d-md-flex justify-content-md-center mb-4 mb-lg-3">

                            </div>
                        </div>
                     
                    </div>
                </div> */}
            </section>
    </div>
  )
}
