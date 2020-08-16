import React, { useRef, useEffect } from "react";
import "./VideoCard.css";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SendIcon from "@material-ui/icons/Send";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Ticker from "react-ticker";
import MusicNoteIcon from "@material-ui/icons/MusicNote";

import handleViewport from "react-in-viewport";

import { useStateValue } from "../../utils/StateProvider";

function VideoCardSection({
    videoSrc,
    accountName,
    accountImage,
    song,
    likes,
    comments,
    inViewport,
    forwardedRef
}) {
    const [{ isPlaying }, dispatch] = useStateValue();

    useEffect(() => {
        if (!inViewport) {
            console.log("Hi")
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
            <div className="video_card__footer">
                <div className="video_card__account">
                    <Avatar src={accountImage} />
                    <h4>{accountName}</h4>•
                    <span className="video_card__follow">Follow</span>
                </div>
                <div className="video_card__song">
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <div className="video_card__ticker">
                                    <MusicNoteIcon />
                                    <h4>{song}</h4>
                                </div>
                            </>
                        )}
                    </Ticker>
                </div>
                <div className="video_card__actions">
                    <div className="video_card__left">
                        <FavoriteIcon />
                        <ChatBubbleIcon />
                        <SendIcon />
                        <MoreHorizIcon />
                    </div>
                    <div className="video_card__right">
                        <div className="video_card__likes">
                            <FavoriteIcon fontSize="small" />
                            <p>{likes}</p>
                        </div>
                        <div className="video_card__comments">
                            <ChatBubbleIcon fontSize="small" />
                            <p>{comments}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
const VideoCard = handleViewport(VideoCardSection, { rootMargin: "-200.0px" });

export default VideoCard;
