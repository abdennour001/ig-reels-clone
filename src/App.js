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
                        isPlaying && dispatch({ type: "TOGGLE_PLAYING" });
                    }}
                    accountName="cleverqazi"
                    accountImage="https://scontent-mrs2-2.cdninstagram.com/v/t51.2885-19/s320x320/22580466_127539667965809_8721119866930593792_n.jpg?_nc_ht=scontent-mrs2-2.cdninstagram.com&_nc_ohc=uPgHHjGHvY8AX_MLy4z&oh=86ec26b791d4368bb5fd47a6e43f981e&oe=5F619B31"
                    song="Kash Man's Hot"
                    likes={990}
                    comments={309}
                    videoSrc="https://scontent-mrs2-1.cdninstagram.com/v/t50.2886-16/117598442_205338364335864_545695080903278566_n.mp4?_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=vjDPPklLnOYAX8-HsHQ&oe=5F3A4C4F&oh=c8e095a6ee74d4548b0b81348fd06ddc"
                />
                <VideoCard
                    onLeaveViewport={() => {
                        if (isPlaying) {
                            dispatch({
                                type: "TOGGLE_PLAYING"
                            });
                        }
                    }}
                    accountName="cleverqazi"
                    accountImage="https://scontent-mrs2-2.cdninstagram.com/v/t51.2885-19/s320x320/22580466_127539667965809_8721119866930593792_n.jpg?_nc_ht=scontent-mrs2-2.cdninstagram.com&_nc_ohc=uPgHHjGHvY8AX_MLy4z&oh=86ec26b791d4368bb5fd47a6e43f981e&oe=5F619B31"
                    song="Kash Man's Hot"
                    likes={990}
                    comments={309}
                    videoSrc="https://scontent-mrs2-1.cdninstagram.com/v/t50.2886-16/117950347_379983256320436_3527680957063597383_n.mp4?_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=fV2FEHywlKYAX8b5HWb&oe=5F3A2B50&oh=5217378d279b076f78bcade922890050"
                />
                <VideoCard
                    onLeaveViewport={() => {
                        isPlaying && dispatch({ type: "TOGGLE_PLAYING" });
                    }}
                    accountName="cleverqazi"
                    accountImage="https://scontent-mrs2-2.cdninstagram.com/v/t51.2885-19/s320x320/22580466_127539667965809_8721119866930593792_n.jpg?_nc_ht=scontent-mrs2-2.cdninstagram.com&_nc_ohc=uPgHHjGHvY8AX_MLy4z&oh=86ec26b791d4368bb5fd47a6e43f981e&oe=5F619B31"
                    song="Kash Man's Hot"
                    likes={990}
                    comments={309}
                    videoSrc="https://scontent-mrs2-1.cdninstagram.com/v/t50.2886-16/117598442_205338364335864_545695080903278566_n.mp4?_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=vjDPPklLnOYAX8-HsHQ&oe=5F3A4C4F&oh=c8e095a6ee74d4548b0b81348fd06ddc"
                />
            </main>
        </div>
    );
}

export default App;
