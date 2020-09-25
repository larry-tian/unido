import React, { Component } from 'react'; 

export class TreeCard extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        // This will pass the name of the tree back to main.js
        this.props.selectedTree(this.props.info.name);
        this.props.treeCallback(this.props.info.name, this.props.info.img);
    }

    render() {
        // Create Cards
        return(
            <div className="card" name={this.props.info.name} onClick={this.handleClick}>
                <img src={this.props.info.img} alt={this.props.info.name}/>
                <h4 className="mt-4">{this.props.info.name}</h4>
                <p className="description">{this.props.info.description}</p>
            </div>
        )
    }
}


export class FlowerCard extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        // This will pass the name of the flower back to main.js
        this.props.selectedFlower(this.props.info.name);
        this.props.flowerCallback(this.props.info.name, this.props.info.img);
    }

    render() {
        // Create Cards
        return(
            <div className="card" name={this.props.info.name} onClick={this.handleClick}>
                <img src={this.props.info.img} alt={this.props.info.name}/>
                <h4 className="mt-4">{this.props.info.name}</h4>
                <p className="description">{this.props.info.description}</p>
            </div>
        )
    }
}


export class CardList extends Component {
    constructor(props) {
        super(props);
        // Store the selected tree and flower
        this.state =  {
            tree: "",
            flower: ""
        }
    }
    // Update the tree info in Main.js
    selectedTree = (tree) => {
        this.setState((currentState) => {
            currentState.tree = tree;
            return currentState;
        })
    }
    // Update the flower info in Main.js
    selectedFlower = (flower) => {
        this.setState((currentState) => {
            currentState.flower = flower;
            return currentState;
        })
    }

    render() {
        // This will create a list of tree cards
        let treeCards = this.props.info.map((eachInfo) => {
            if(eachInfo.type === "Tree") {
                return <TreeCard info={eachInfo} key={eachInfo.id} treeCallback={this.props.treeCallback} selectedTree={this.selectedTree}/>
            } else {
                return undefined;
            }
        });

        // This will create a list of flower cards
        let flowerCards = this.props.info.map((eachInfo) => {
            if (eachInfo.type === "Flower") {
                return <FlowerCard info={eachInfo} key={eachInfo.id} flowerCallback={this.props.flowerCallback} selectedFlower={this.selectedFlower}/>
            } else {
                return undefined;
            }
        });

        let selectedTree;
        let selectedFlower;

        // This will display what user has selected
        if (this.state.tree === undefined | this.state.tree === "") {
            // Shows you the warning message
            selectedTree = <p className="text-danger">Please select a type of tree</p>;
        } else {
            selectedTree = 
            <p>You have selected <strong className="streaks">{this.state.tree}</strong></p>
        }

        if (this.state.flower === undefined | this.state.flower === "") {
            // Shows you the warning message
            selectedFlower = <p className="text-danger">Please select a type of flower</p>;
        } else {
            selectedFlower = 
            <p>You have selected <strong className="streaks">{this.state.flower}</strong></p>
        }

        return(
        // This will combine all the tree and flower cards together
            <div>
                <section className="col-sm-12 col-md-9 col-lg-10 scheduleForm">
                    <h1 className="ml-2 mt-2 mb-3">Here are the trees that you can grow:</h1>
                    <p className="ml-2 mt-2 mb-3">Tree will grow every 15 seconds (max: 3)</p>
                    {selectedTree}
                    <div className="card-pool">
                        {treeCards}
                    </div>

                    <br />

                    <h1 className="ml-2 mt-3 mb-3">Here are the flowers that you can plant:</h1>
                    <p className="ml-2 mt-2 mb-3">Flower will grow everytime you hit "pause" (max: 20)</p>
                    {selectedFlower}
                    <div className="card-pool">
                        {flowerCards}
                    </div>
                </section>
            </div>
            
        )
    }
}


export default class CardPage extends Component {
    constructor() {
        super();
    }

    render() {

        return(
            // This will display the trees and flowers cards
            <div>
                <CardList info={this.props.info} treeCallback={this.props.treeCallback} flowerCallback={this.props.flowerCallback}/>
            </div>
        );
    }

}