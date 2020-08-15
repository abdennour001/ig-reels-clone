import React, { useRef, useEffect } from "react";
import "./VideoCard.css";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import handleViewport from "react-in-viewport";
import { useStateValue } from "../../utils/StateProvider";

function VideoCardSection({ videoSrc, inViewport, forwardedRef }) {
    const [{ isPlaying }, dispatch] = useStateValue();

    useEffect(() => {
        if (!inViewport) {
            videoRef.current.pause();
            dispatch({
                type: "TOGGLE_PLAYING"
            });
        }
    }, [inViewport]);

    let videoRef = useRef(null);

    function toggleVideo() {
        isPlaying && inViewport
            ? videoRef.current.play()
            : videoRef.current.pause();
        dispatch({
            type: "TOGGLE_PLAYING"
        });
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
