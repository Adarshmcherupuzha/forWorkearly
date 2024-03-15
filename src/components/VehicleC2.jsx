import React from 'react'

const VehicleC2 = () => {
  return (
    <div>
        
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <h1>Search for your favorite one!!!</h1>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Enter location"
                aria-label="Search"
              />
            </form>
            <br />
            <button className="btn btn-outline-success" type="submit">
              See Cars
            </button>
            <br />
            <br />
            <br />
          </div>
        </div>


    </div>
  )
}

export default VehicleC2