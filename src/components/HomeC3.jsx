import React from 'react'

const HomeC3 = () => {
  return (
    <div>  <div className="container">
    <div className="row">
      <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <br />
        <br />
        <br />
        <br />
        <h3>Share your experience with us!!!</h3>

        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Write here"
            aria-label="Search"
          />
        </form>
        <br />
        <button type="button" className="btn btn-black">
          {" "}
          <img
            height="50px"
            src="../assets/star.jpg"
            alt=""
          />
        </button>
        <button type="button" className="btn btn-black">
          {" "}
          <img
            height="50px"
            src="../assets/star.jpg"
            alt=""
          />
        </button>
        <button type="button" className="btn btn-black">
          {" "}
          <img
            height="50px"
            src="../assets/star.jpg"
            alt=""
          />
        </button>
        <button type="button" className="btn btn-black">
          {" "}
          <img
            height="50px"
            src="../assets/star.jpg"
            alt=""
          />
        </button>
        <button type="button" className="btn btn-black">
          {" "}
          <img
            height="50px"
            src="../assets/star.jpg"
            alt=""
          />
        </button>
        <br />
        <br />

        <button className="btn btn-outline-success" type="submit">
          Upload
        </button>
        <br />
        <br />
        <br />
        <br />
      </div>

      <div className="col col-12 col-sm-1 col-md-2 col-lg-2 col-xl-2 col-xxl-2"></div>

      <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
        <br />
        <br />
        <br />
        <br />
        <h4>Contact:</h4>
        <img
          height="50px"
          src="../assets/phone.png"
          alt="..."
        />
        9526483987
        <br />
        <img
          height="50px"
          src="../assets/mail.jpg"
          alt="..."
        />
        gowithus@gmail.com
        <br />
      </div>
    </div>
  </div></div>
  )
}

export default HomeC3