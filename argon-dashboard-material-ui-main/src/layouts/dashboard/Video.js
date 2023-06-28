import React, { useState } from 'react';
import heatmap from "assets/images/newHeatMap0.png";
import heatmapvideo from "assets/images/heatmapvideo.mp4";
import interceptionvideo from "assets/images/interception.mp4";
import pass from "assets/images/pass.mp4";

function VideoPlayer() {
  const [videoFile, setVideoFile] = useState(null);
  const yolovidpath = '/yolovideo.mp4';
  const topdownvidpath = '/topdown.mp4';
  const heatmapvidpath = '/heatmapvideo.mp4';

  

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setVideoFile(file);
  };

  return (
    <div>
      <div style={{ marginLeft: '300', backgroundColor: "cadetblue" }}>
        &nbsp;&nbsp;&nbsp;
        <input type="file" accept="video/*" onChange={handleFileChange} />
        <button onClick={() => setVideoFile(null)}>Play</button>
      </div>
      <br />
      <br />
      {videoFile && (
        <div>
          {/* main video */}
          
          <video controls style={{ width: '40%', height: '50%',  marginLeft: '80px' }}>
            <source src={URL.createObjectURL(videoFile)} type="video/mp4" />
          </video>

          {/* yolo video */}
          
          <video controls style={{ width: '40%', height: '50%',  marginLeft: '60px' }}>
            <source src={process.env.PUBLIC_URL + yolovidpath} type="video/mp4" />
          </video>

          {/* top down video */}
          
          <video controls style={{ width: '40%', height: '50%',  marginLeft: '80px' }}>
            <source src={process.env.PUBLIC_URL + topdownvidpath} type="video/mp4" />
          </video>

          {/* heatmap video */}
          &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <video controls style={{ width: '40%', height: '30%' }}>
          <source src={interceptionvideo} type="video/mp4" />
          </video>

          {/* tracking pattern video */}
          
          <video controls style={{ width: '40%', height: '50%' , marginLeft: '80px'}}>
          <source src={pass} type="video/mp4" />
          </video>
          {/* pass video */}
          
          <video controls style={{ width: '40%', height: '50%', marginLeft: '70px' }}>
          <source src={heatmapvideo} type="video/mp4" />
          </video>

          {/* pressure point image */}
          &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src={heatmap} alt="heatmap" style={{ marginLeft: '160px' }} />


        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
