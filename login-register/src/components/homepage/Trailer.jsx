import axios from 'axios';
import React, { useRef, useEffect, useState } from "react";
const API_KEY='84edaeedd68b9e73abbe95b5bb70617a';
const getVideos = (id)=>{
    return `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
}
const Trailer=({id})=>{
    const[trailer, setTrailer]=useState([])
    useEffect(()=>{
        axios.get(getVideos(id))
        .then(response=>{
            const trailers=response.data.results.filter(item => {
                return item.type === "Trailer" && item.site==="YouTube"});
            setTrailer(trailers);
            console.log(trailers);
        })
        .catch(err=>{console.log(err)})
    },[])
    return <div>
        {trailer.map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>
          {/* <p>{item.key}</p> */}
          <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + item.key} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      ))}
    </div>
}
export default Trailer;