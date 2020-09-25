import React, { Component } from 'react'; 

export default class FocusPlaylist extends Component {
    render() {
        return(
                <div className="col-sm-12 col-md-3 col-lg-2">
                    {/* Display the music list */}
                    <section>
                        <h1 className="centered">Focus Playlist</h1>
                        <hr aria-hidden="true" />
                            <div className="music-card">
                                <a href="https://www.youtube.com/watch?v=5qap5aO4i9A"><img src="img/lofi.jpg" alt="Lofi Hip Hop Music"/></a>
                            </div>
                            <p aria-hidden="true">Lofi Hip Hop</p>

                            <div className="music-card">
                                <a href="https://www.youtube.com/watch?v=BklGhQYKl30"><img src="img/calm.jpg" alt="Calm Music"/></a>
                            </div>
                            <p aria-hidden="true">Calm Music</p>

                            <div className="music-card">
                                <a href="https://www.youtube.com/watch?v=Dx5qFachd3A"><img src="img/jazz.jpg" alt="Hip Hop Jazz"/></a>
                            </div>
                            <p aria-hidden="true">Hip Hop Jazz</p>

                            <div className="music-card">
                                <a href="https://www.youtube.com/watch?v=lCOF9LN_Zxs"><img src="img/piano.jpg" alt="Piano Music"/></a>
                            </div>
                            <p aria-hidden="true">Piano Music</p>

                            <div className="music-card">
                                <a href="https://www.youtube.com/watch?v=uxzv4pRcuKo"><img src="img/acoustic.jpg" alt="Acoustic Music"/></a>
                            </div>
                            <p aria-hidden="true">Acoustic Music</p>
                    </section>
                </div>
        );
    }

}