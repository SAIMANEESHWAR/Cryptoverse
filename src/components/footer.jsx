import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
           <div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class=" me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
      <i class=" h2 fa-solid fa-s fa-flip"></i>      </a>
      <span class=" mb-md-0 text-body-secondary"> Copyright © 2023 All rights reserved</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><Link class="text-body-secondary" to="https://www.linkedin.com/in/saimaneeshwar-siddapuram/"><i class="fa-brands fa-linkedin h2"></i></Link></li>
      <li class="ms-3"><Link class="text-body-secondary" to="https://www.instagram.com/"><i class="fa-brands fa-instagram h2"></i></Link></li>
      <li class="ms-3"><Link class="text-body-secondary" to="https://github.com/SAIMANEESHWAR?tab=repositories"><i class="fa-brands fa-github h2"></i></Link></li>
    </ul>
  </footer>
</div>
    </div>
  )
}
