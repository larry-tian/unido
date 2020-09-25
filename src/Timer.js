import React, { Component } from 'react'; 
import Timer from 'react-compound-timer';

export default class ForestTimer extends Component {

    render() {

        // Set time to be minute-based
        let setTime = this.props.time * 60000

        return (
            <div className="menu-item">
                <section>
                    <h1 className="centered">Countdown</h1>
                    <hr aria-hidden="true" />
                    {/* React Library: Count Down */}
                    <Timer 
                    initialTime={setTime}
                    direction="backward"
                    onPause={() => {
                        // Increase the number of flowers in App.js
                        this.props.addFlowerNum();
                    }}
                    checkpoints={[
                        {
                            // Grow the first tree
                            time: setTime - 15000, //After 15 seconds
                            callback: () => {
                                this.props.addTreeNum();
                            }
                        },
                        {
                            // Grow the second tree
                            time: setTime - 30000, // After 30 seconds
                            callback: () => {
                                this.props.addTreeNum();
                            }
                        },
                        {
                            // Grow the third tree
                            time: setTime - 45000, // After 45 seconds
                            callback: () => {
                                this.props.addTreeNum();
                            }
                        }
                    ]}>
                    
                    {/* Timer Display */}
                    {({resume, pause, reset}) => (
                        <React.Fragment>
                            <div className="centered">
                                <h1 className="streaks">
                                <Timer.Hours /> Hours <p>{/* Line break */}</p>  
                                <Timer.Minutes /> Minutes <p>{/* Line break */}</p>  
                                <Timer.Seconds formatValue={value => `${value}`}/> Seconds
                                </h1>
                            </div>

                            <br />
                            {/* Timer buttons */}
                            <div className="text-center">
                                <button onClick={resume} className="btn btn-success mx-2">Resume</button>
                                <button onClick={pause} className="btn btn-warning mx-2">Pause</button>
                                <button onClick={reset} className="btn btn-secondary mx-2">Restart</button>
                            </div>
                        </React.Fragment>
                    )}
                    </Timer>
                </section>
            </div>
        );
    }
}