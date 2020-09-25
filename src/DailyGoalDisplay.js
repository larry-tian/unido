import React, { Component } from 'react'; 

export default class DailyGoalDisplay extends Component {
    render() {
        let content;
        if (this.props.goal === "" | this.props.goal === undefined) {
            content = <p>You haven't set any goals yet</p>
        } else {
            content = <p>{this.props.goal}</p>
        }
        return(
            <div>
                <section>
                    <h1>Today's Goal </h1>
                    <hr aria-hidden="true"/>
                    {content}
                </section>
            </div>
        )
    }
}