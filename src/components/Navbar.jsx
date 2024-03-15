import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg" style={{ backgroundColor: "black" }}
>
        <div class="container-fluid">
            <img height="100px"
                src="../assets/logo.png"
                alt="..."/>
            <a class="navbar-brand text-light" href="#">GO</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active text-light" aria-current="page" href="index.html">Home</a>
                    <a class="nav-link text-light    " href="vehicle.html">Vehicles</a>
                    <a class="nav-link text-light" href="safty.html">Safety</a>
                    <a class="nav-link text-light" href="help.html">Help</a>


                    <a class="nav-link text-light" href="login.html">Login</a>

                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button class="btn btn-primary" type="button">Sign Up</button>
                    </div>








                </div>
            </div>
        </div>
    </nav>



        



    </div>
  )
}

export default Navbar