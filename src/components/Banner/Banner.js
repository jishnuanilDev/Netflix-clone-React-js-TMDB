import React, { useEffect, useState } from 'react';
import './Banner.css';
import { API_KEY } from '../Constants/constants';
import { imagePath } from '../Constants/constants';
import Swal from 'sweetalert2'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import axios from '../../axios';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      console.log(response.data.results);
      setMovie(response.data.results);
    });
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  const responsive = {
    0: { items: 1 },
    600: { items:3 },
    1024: { items:2},
  };

  return (
    <AliceCarousel
    mouseTracking
    responsive={responsive}
    autoPlay
    autoPlayInterval={5000}
    infinite
  >

      {movie.map((data) => (
        <div
          key={data.id} // Add unique key for each banner
    style={{backgroundImage:`url(${data? imagePath+data.backdrop_path:''})`}}
          className='banner'
        >
          <div className='content'>
            <h1 className='banner-title'>{data ? data.name || data.original_title : ''} </h1>
            <p className='banner-description'>{data ? data.overview : ''}</p>
            <div className='banner-buttons'>
              <button  onClick={signUpReq} className='banner-button'>More Info</button>
              <button onClick={signUpReq} className='banner-button'>Play</button>
            </div>
          </div>
          <div className='fade-bottom'></div> 
        </div>

      ))}
           </AliceCarousel>
 
    

  );
  function signUpReq(){
    const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "warning",
        title: "Sign-Up is required"
      });
}

}

export default Banner;
