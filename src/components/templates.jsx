import React from 'react'
import { Link } from 'react-router-dom';
import mem1 from '../photos/photos/mem-1.jpg';
import mem2 from '../photos/photos/mem-2.jpg';
import mem4 from '../photos/photos/shashank.jpg';
import mem6 from '../photos/photos/saiakshay.jpg';
import mem8 from '../photos/photos/mem8.jpg'
import me from '../photos/photos/me2.jpg';
import Footer from './footer';

export default function templates() {
    const imgSources = [me, mem1, mem2,mem6,mem8,mem4];
    const namesources=["Sai Maneeshwar","Sravani","Vinay","Sai Akshay","Ananya","Shashank"]
    return (
        <div>        
            <div class="container mt-5 bg-dark-subtle">
            <div class="p-5 text-center  rounded-3">
                <h1 class="text-body-emphasis">PROJECT-MEMBERS</h1>
                
            </div>
            <div class="row d-flex justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {imgSources.map((images123, index) => (
                    <div class="col">
                        <div class="card shadow-sm">
                            <img src={images123} className=" card-img-top" width="100%" height="290"></img>
                            <div class="card-body bg-body-secondary">
                                <h3>{namesources[index]}</h3>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tellus eget justo facilisis, quis vestibulum urna rhoncus. Fusce sit amet venenatis tortor. Nullam auctor libero vitae lectus bibendum, ut tempus odio faucibus.
</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    {/* <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div> */}
                                    <small class="text-body-secondary"><i class="fa-solid fa-star fa-beat"></i><i class="fa-solid fa-star fa-beat"></i><i class="fa-solid fa-star fa-beat"></i><i class="fa-solid fa-star fa-beat"></i><i class="fa-solid fa-star-half-stroke fa-beat"></i></small>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                

            </div>
        </div>


<div className='container mt-5'>
            <div class="row align-items-md-stretch">
      <div class="col-md-6">
        <div class="h-100 p-5 text-bg-dark rounded-3">
          <h2>About The Project</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tellus eget justo facilisis, quis vestibulum urna rhoncus. Fusce sit amet venenatis tortor. Nullam auctor libero vitae lectus bibendum, ut tempus odio faucibus.</p>
          <button class="btn btn-outline-light" disabled type="button">Sources</button>
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 bg-body-tertiary border rounded-3">
          <h2>Git Hub</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tellus eget justo facilisis, quis vestibulum urna rhoncus. Fusce sit amet venenatis tortor. Nullam auctor libero vitae lectus bibendum, ut tempus odio faucibus.</p>
          <button class="btn btn-outline-secondary "disabled type="button">Git Link</button>
        </div>
      </div>
    </div>
</div>
<div className=''>
    <br/>
    <br/>
</div>
<Footer/>


        </div>

    )
}
