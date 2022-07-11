import React from "react";
import Footer from "../Footer/Footer";
import Slideshow from "../Landingpage/ImgSlider";
import Videofile from "../Videos/H.mp4";

export default function Videobox() {
  return (
    <>
      {/* Video player */}
      <div className="v-c-box">
        <div className="video_box">
          <video autoPlay loop muted src={Videofile}></video>
        </div>
        {/* carouselExample */}

        <div className="car_box">
          <Slideshow />
          {/* <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={Img1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={Img2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={Img3} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div> */}
        </div>
      </div>
      <div
        className="grid_images"
        style={{
        //   border: "1px solid red",
          height: "550px",
          width: "100%",
          marginTop: "60px",
        }}
      >
        <div className="image_box">
          <img
            className="imgbox"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2DTyMNOHirvhabEkj8wU23pNVdKavOfoURA&usqp=CAU"
          ></img>
          <img
            className="imgbox"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4aOj60UdYgyvJdaHkjR_LfLb5bQG3bCiMiQ&usqp=CAU"
          ></img>
          <img
            className="imgbox"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNMtiyTiK_YIwKjmIyXmZlI1riGRoE5OV18w&usqp=CAU"
          ></img>
          <img
            className="imgbox"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqWLn8J9uJcUkAaKbspBTKDc5yLxUq40wkdA&usqp=CAU"
          ></img>
          <img
            className="imgbox"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5CuBHXvUhDqI-5YY6Vpn-DQUFOm0hpogNYA&usqp=CAU"
          ></img>
          <img
            className="imgbox"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-6dgaqP9OgimTcXsUYQoAj4eJA7iLYhh-4w&usqp=CAU"
          ></img>
          <img
            className="imgbox"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhTlYbRNnWiwVffv8vYgQDEsu2zOV_cq5gFg&usqp=CAU"
          ></img>
          <img
            className="imgbox"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR82htotpYSNxtuaFfpUWJYBqMeKYAWkiU4SA&usqp=CAU"
          ></img>
        </div>
      </div>
      <div className="footer">
       <Footer/>
      </div>
    </>
  );
}
