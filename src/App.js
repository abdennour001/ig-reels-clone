import React from "react";
import "./App.css";
import VideoCard from "./component/VideoCard";

function App() {
    return (
        <div className="app">
            {/* Header section */}
            <header className="app__header">
                {/* Logos container  */}
                <div className="app__logos">
                    {/* Instagram logo */}
                    <img src="" alt="IG" />
                    {/* Reels logo */}
                    <img src="" alt="Reels" />
                </div>
                {/* Title */}
                <h2>Reels</h2>
            </header>
            <main className="app__main">
                {/* Reels component */}
                <VideoCard />
            </main>
        </div>
    );
}

export default App;
