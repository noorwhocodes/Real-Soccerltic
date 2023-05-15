import React, { useState } from 'react';

function VideoPlayer() {
  const [videoFile, setVideoFile] = useState(null);
  const vidpath = '/demovid.mp4';

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setVideoFile(file);
  };

  return (
    <div>
    
        <div style={{marginLeft:'200'}}>
            &nbsp;&nbsp;&nbsp;
            <input type="file" accept="video/*" onChange={handleFileChange} />
            <button  onClick={() => setVideoFile(null)}>Play</button>
        </div>
                <br/>
                <br/>
        <div>
             &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             
                {videoFile && (
                    <video controls style={{ width: '40%', height: '50%' }}>
                    <source src={URL.createObjectURL(videoFile)} type="video/mp4" />
                </video>
            )}

                &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; 
                {videoFile && (
                    <video controls style={{ width: '40%', height: '50%' }}>
                    <source src={process.env.PUBLIC_URL + vidpath} type="video/mp4" />
                </video>
            )}
            
                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                {videoFile && (
                    <video controls style={{ width: '40%', height: '50%' }}>
                    <source src={process.env.PUBLIC_URL + vidpath} type="video/mp4" />
                </video>
            )}
                &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; 
                    {videoFile && (
                    <video controls style={{ width: '40%', height: '50%' }}>
                    <source src={process.env.PUBLIC_URL + vidpath} type="video/mp4" />
                </video>
            )}
        </div>

        

      {/* {vidpath && (
        <video controls style={{ width: '50%', height: '50%' }}>
          <source src={process.env.PUBLIC_URL + vidpath} type="video/mp4" />
        </video>
      )} */}
    </div>
  );
}

export default VideoPlayer;
