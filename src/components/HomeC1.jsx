import React from 'react'

const HomeC1 = () => {
  return (
    <div>
        

    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className="container-fluid">
                    <br/><br/><br/><br/><br/><br/><br/>
                    <h1>Connecting Journeys, Delivering Dreams</h1>
                    <h6>Your Pathway to Seamless Transport Solutions.</h6>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Enter location" aria-label="Search"/>


                        <input className="form-control me-2" type="search" placeholder="Enter Destination"
                            aria-label="Search"/>

                    </form><br/>
                    <button className="btn btn-outline-success" type="submit">See price</button><br/><br/><br/>

                </div>



            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <img src="..\assets\main.jpg"
                    className="d-block w-100" alt="..."/>


            </div>
        </div>



        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                    <br/> <br/><br/><br/>
                    <h3><b>Ride with GO</b> – your go-to taxi service for quick, reliable, and stress-free
                        transportation. Count on us for punctual and courteous rides to your destination, whether it's
                        the airport, a meeting, or a night out. Enjoy a smooth journey with our professional drivers and
                        modern fleet. Your convenient and comfortable ride starts here!"</h3><br/> <br/><br/><br/>
                </div>
            </div>
        </div>
    </div>

        


    </div>
  )
}

export default HomeC1