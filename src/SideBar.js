import React, { Component } from 'react'; 
import Achievements from './Achievements';
import YourForest from './YourForest';
import ForestTimer from './Timer';

export default class SideBar extends Component {
    render() {
        return(
                <div className="col-sm-12 col-md-3 col-lg-3">
                    <ForestTimer time={this.props.userInfo.time} addTreeNum={this.props.addTreeNum} addFlowerNum={this.props.addFlowerNum}/>
                    <Achievements treeNum={this.props.userInfo.treeNum} flowerNum={this.props.userInfo.flowerNum}/>
                    <YourForest tree={this.props.userInfo.tree} flower={this.props.userInfo.flower}/>
                </div>
        );
    }

}