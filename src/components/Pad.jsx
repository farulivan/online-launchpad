import { useEffect, useState } from "react";

const Pad = (props) => {
    
    // document.addEventListener('keydown', (e) => console.log(e.key.toUpperCase()))

    const handleClick = (e) => {
        const inThis = e.target
        setActive(prev => !prev)
        const audio = inThis.querySelector("audio")
        console.log(audio)
        audio.currentTime = 0
        audio.play()
        setTimeout(() => {
            setActive(prev => !prev)
          }, 200)
    }
       
    return (
        <div 
            className={`drum-pad ${props.isActive ? "cyan-glow" : "base-color"}`}
            onClick={props.playSound}
            id={props.id}
        >
            {props.keyTrigger}
            <audio
                className="clip"
                id={props.keyTrigger}
                src={`/${props.src}`}
            >
            </audio>
        </div>
    );
}
 
export default Pad;