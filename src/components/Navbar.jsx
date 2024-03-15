import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "black" }}
>
        <div className="container-fluid">
            <img height="100px"
                src="../assets/logo.png"
                alt="..."/>
            <a className="navbar-brand text-light" href="#">GO</a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active text-light" aria-current="page" href="index.html">Home</a>
                    <a className="nav-link text-light    " href="">Vehicles</a>
                    <a className="nav-link text-light" href="">Safety</a>
                    <a className="nav-link text-light" href="">Help</a>


                    <a className="nav-link text-light" href="">Login</a>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button className="btn btn-primary" type="button">Sign Up</button>
                    </div>








                </div>
            </div>
        </div>
    </nav>



        



    </div>
  )
}

export default Navbar