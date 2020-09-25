import React, { Component } from 'react'; 
import Card from './Card';



// fetch
import 'whatwg-fetch';

export default class PersonalPreference extends Component {
    constructor() {
        super();
        // store the information of flowers and tree
        this.state = {
            info: []
        }
    }

    // fetch data from json
    componentDidMount() {
        fetch("./data/ForestInfo.json")
        .then((res) => res.json())
        .then((data) => {
            this.setState((currState) => {
                let allTreesFlowers = currState.info.concat(data);
                return {info: allTreesFlowers};
            }); // end of setState
        }) 
        .catch((err) => {
            console.log(err);
        }); // end of fetch
    }


    render() {
        return(
            <div>
                <h2 className="scheduleTitle">Personal Preferences</h2>
                <Card info={this.state.info} treeCallback={this.props.treeCallback} flowerCallback={this.props.flowerCallback}/>
            </div>
        )
    }
}