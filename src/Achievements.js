import React, { Component } from 'react'; 

export default class Achievements extends Component {
    render() {
        // Calculate the number of animals
        let animalNum = this.props.treeNum * 3 + this.props.flowerNum;
        return(
            <div>
                <div className="menu-item">
                    {/* Display the current forest status */}
                     <section className="menu-functionality">
                        <h1 className="centered">Achievements</h1>
                        <hr aria-hidden="true"/>
                        <p>Trees grown: <strong className="streaks centered">{this.props.treeNum} Trees</strong></p>
                        <p>Flowers grown: <strong className="streaks centered">{this.props.flowerNum} Flowers</strong></p>
                        <p>Animals attracted: <strong className="streaks centered">{animalNum} Animals</strong></p>
                    </section>
                </div>
            </div>
        );
    }

}