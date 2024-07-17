import React from 'react'
import './Poster.css'
import Swal from 'sweetalert2'
import 'animate.css';

import axios from '../../axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { imagePath } from '../Constants/constants'
import { API_KEY } from '../Constants/constants'
import YouTube from 'react-youtube';
function Poster(props) {

const[movie,setMovie] = useState([]);
const[trailerId,setTrailerId] = useState('')


    useEffect(()=>{
      axios.get(props.url).then((Response)=>{
        console.log('poster set:',Response.data.results);
  setMovie(Response.data.results);
      }).catch(err=>{
        console.log('Axios 1error:',err)
      })
    },[])

    function handleClick(id){
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US'`).then((res)=>{
           
            if(res.data.results.length!==0){
                setTrailerId(res.data.results[0].key)
           

            }else{
                Swal.fire({
                    title: 'Oops!',
                    text: 'Video not available right now',
                    icon: 'info',
                    confirmButtonText: 'Check Later'
                  })
            }
        })
    }
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };
    
      function handleCloseVideo(){
        setTrailerId('')
      }
    return (
        <div className='row'>
            <h2 className='poster-title'>{props.title}</h2>
            <div className='posters'>
                {
                    movie ?  movie.map((obj)=>{
                        return(
                            <div key ={obj.id} className='poster-div'>
                            <img onClick={()=>handleClick(obj.id)}
                                src={obj ? imagePath+obj.backdrop_path:''} alt='img'
                                className='poster'
                            />
                            <h5 className='poster-name'>{obj? obj.name || obj.original_title : ''}</h5>
                        </div>
                        )
                    }) : ''
                
                }
            
            </div >
            { trailerId &&    <YouTube videoId={trailerId} opts={opts}  />  }
            { trailerId &&   <button className='closeVideo' onClick={handleCloseVideo}>Close video</button>}

        </div>
    )



}

export default Poster
