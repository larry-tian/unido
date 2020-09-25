import React, { Component } from 'react'; 
import SideBar from './SideBar';
import ForestContent from './ForestContent';
import FocusPlaylist from './FocusPlaylist';


export default class Main extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        return(
            <div>>
                <main>
                    <div className="row">
                        <SideBar userInfo={this.props.userInfo} addTreeNum={this.props.addTreeNum} addFlowerNum={this.props.addFlowerNum}/>
                        <ForestContent userInfo={this.props.userInfo} />
                        <FocusPlaylist />
                    </div>
                </main>
            </div>
        );
    }
}
