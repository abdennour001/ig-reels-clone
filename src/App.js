import React from "react";
import "./App.css";
import VideoCard from "./components/VideoCard";
import MovieIcon from "@material-ui/icons/Movie";
import { useStateValue } from "./utils/StateProvider";

function App() {
    const [{ isPlaying }, dispatch] = useStateValue();

    return (
        <div className="app">
            {/* Header section */}
            <header className="app__header">
                {/* Logos container  */}
                <div className="app__title">
                    {/* Instagram logo */}
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
                        alt="IG"
                    />
                    {/* Reels logo */}
                    <MovieIcon className="app__reel" />
                    {/* Title */}

                    <h2>Reels</h2>
                </div>
            </header>
            <main className="app__main">
                {/* Reels component */}
                <VideoCard
                    onLeaveViewport={() => {
                        if (isPlaying) {
                            dispatch({
                                type: "TOGGLE_PLAYING"
                            });
                        } 
                    }}
                    videoSrc="https://scontent-mrs2-1.cdninstagram.com/v/t50.2886-16/117950347_379983256320436_3527680957063597383_n.mp4?_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=fV2FEHywlKYAX8b5HWb&oe=5F3A2B50&oh=5217378d279b076f78bcade922890050"
                />
                <VideoCard
                    onLeaveViewport={() => {
                        isPlaying && dispatch({ type: "TOGGLE_PLAYING" });
                    }}
                    videoSrc="https://scontent-mrs2-1.cdninstagram.com/v/t50.2886-16/117598442_205338364335864_545695080903278566_n.mp4?_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=vjDPPklLnOYAX8-HsHQ&oe=5F3A4C4F&oh=c8e095a6ee74d4548b0b81348fd06ddc"
                />
                <VideoCard
                    onLeaveViewport={() => {
                        isPlaying && dispatch({ type: "TOGGLE_PLAYING" });
                    }}
                    videoSrc="https://scontent-mrs2-1.cdninstagram.com/v/t50.2886-16/117598442_205338364335864_545695080903278566_n.mp4?_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=vjDPPklLnOYAX8-HsHQ&oe=5F3A4C4F&oh=c8e095a6ee74d4548b0b81348fd06ddc"
                />
            </main>
        </div>
    );
}

export default App;
