import React, { useState, useRef, useEffect } from "react";
import "./VideoCard.css";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import handleViewport from "react-in-viewport";

function VideoCardSection({ videoSrc, inViewport, forwardedRef }) {
    useEffect(() => {
        console.log(inViewport);
    }, [inViewport]);

    let videoRef = useRef(null);
    let [isPlaying, setIsPlaying] = useState(true);

    function toggleVideo() {
        isPlaying ? videoRef.current.play() : videoRef.current.pause();
        setIsPlaying(!isPlaying);
    }

    return (
        <div className="video_card" ref={forwardedRef}>
            <video
                onClick={toggleVideo}
                ref={videoRef}
                className="video_card__reel"
                src={videoSrc}
                loop={true}
            ></video>
            <div className="video_card__header">
                <ArrowBackIosIcon />
                <h3>Reels</h3>
                <CameraAltOutlinedIcon />
            </div>
            <div className="video_card__footer"></div>
        </div>
    );
}
const VideoCard = handleViewport(VideoCardSection, { rootMargin: "-200.0px" });

export default VideoCard;
