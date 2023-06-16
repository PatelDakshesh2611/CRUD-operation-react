import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link className='nav-link' to='/home'>Home</Link>
        </li>
        <li class="nav-item">
          <Link to='/data' className="nav-link">Data</Link>
        </li>
        <li class="nav-item">
          <Link to='/insert' className='nav-link'>Insert</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
