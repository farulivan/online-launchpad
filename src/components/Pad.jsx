const Pad = (props) => {
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