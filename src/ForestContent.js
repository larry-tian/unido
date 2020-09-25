import React, { Component } from 'react'; 
import DailyGoalDisplay from './DailyGoalDisplay';
import ForestDisplay from './ForestDisplay';


export default class ForestContent extends Component {
    render() {
        return(
                <div className="col-sm-12 col-md-6 col-lg-7">
                    <section className="forest-page">
                        <DailyGoalDisplay goal={this.props.userInfo.goal} />
                    </section>   

                    <section>
                        <ForestDisplay time={this.props.userInfo.time} treeNum={this.props.userInfo.treeNum} treeImg={this.props.userInfo.treeImg} treeName={this.props.userInfo.tree} flowerNum={this.props.userInfo.flowerNum} flowerImg={this.props.userInfo.flowerImg} flowerName={this.props.userInfo.flower}/>
                    </section>
                </div>
        )
    }
}