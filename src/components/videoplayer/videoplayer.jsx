import React , {useRef} from 'react'
import "./videoplayer.css"
import collageVideo from '../../assets/collage-vid.mp4'




const videoplayer = ({playstate , setplaystate}) => {

  const player = useRef(null);

  const closePlayer =(e)=>{
    if(e.target === player.current){
      setplaystate(false)
    }
  }

  return (
    <div className ={`video-player ${playstate? " ":"hide"}`} ref={player} onClick={closePlayer}>
      <video src={collageVideo} autoPlay muted controls></video>
    </div>
  )
}

export default videoplayer
