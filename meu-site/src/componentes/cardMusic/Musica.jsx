import React from "react";
import "./Musica.css";

function MusicSection() {
    return (
        <section className="music-section">
            <h2>Music</h2>
            <p>Um pouco da minha trilha sonora diaria para estudor</p>

            <div className="players">
                <div className="player-card">
                    <iframe
                        src="https://open.spotify.com/embed/track/0mROspyBziPHPyxTPFvKaH?utm_source=generator&theme=0"
                        width="100%"
                        height="352"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                </div>

                <div className="player-card">
                    <iframe
                        src="https://open.spotify.com/embed/track/5lII7EB0WGZTxJMYNOoFGS?utm_source=generator&theme=0"
                        width="100%"
                        height="352"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                </div>



                <div className="player-card">
                    <iframe
                        src="https://open.spotify.com/embed/track/2dE0Amo1H5TOSWzMTqYv1h?utm_source=generator&theme=0"
                        width="100%"
                        height="352"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                </div>

                <div className="player-card">
                    <iframe
                        src="https://open.spotify.com/embed/track/2LefVhQwcakl37iJsPv7NY?utm_source=generator&theme=0"
                        width="100%"
                        height="352"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

export default MusicSection;
