import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [videoplay,setVideoPlay] = useState(false)
  const vidRef = React.useRef()

  const handleVideo = () => {
    setVideoPlay((prePlayVideo)=> !prePlayVideo )

     
    
      if(videoplay){
        vidRef.current.pause();
      }else{
        vidRef.current.play();
      }
    
  }
  return(
    <div className='app__video'>
    <video className='' 
      src={meal}
      ref={vidRef}
      type='video/mp4'
      loop
      controls={false}
      muted
    />
    <div className='app__video-overlay flex__center'>
     <div className='app__video-overlay_circle flex__center'
     onClick={handleVideo}
     >
      {videoplay ? (
        <BsPauseFill color='#fff' fontSize={30}/>
      ):<BsFillPlayFill color='#fff' fontSize={30}/>}
     </div>
    </div>
    
  </div>
  )
}
 


export default Intro;
