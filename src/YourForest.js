import React, { Component } from 'react'; 

export default class YourForest extends Component {

    render() {

        return(
            <div>
                <div className="menu-item">
                    {/* Display the personal preference */}
                    <section className="menu-functionality">
                        <h1 className="centered">Your Forest</h1>
                        <hr aria-hidden="true"/>
                        <p>Tree Type: <strong className="streaks centered">{this.props.tree}</strong></p>
                        <p>Flower Type: <strong className="streaks centered">{this.props.flower}</strong></p>
                    </section>
                </div>
            </div>
        );
    }

}