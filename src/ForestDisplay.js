import React, { Component } from 'react'; 

export class Trees extends Component {
    render() {
        let trees = [];
        // Create trees based on treeNum (max: 3)
        if (this.props.treeNum < 3) {
            for(let i = 0; i < this.props.treeNum; i++){
                trees.push(<img src={this.props.treeImg} alt={this.props.treeName} key={i}/>);
            }
        } else {
            for(let i = 0; i < 3; i++){
                trees.push(<img src={this.props.treeImg} alt={this.props.treeName} key={i}/>);
            }
        }
       
        return(
            <div id="trees">
                {trees}
            </div>
        )
    }
}

export class Flowers extends Component {
    render() {     
        let flower = [];
        // Create flowers based on flowerNum (max: 20)
        if (this.props.flowerNum < 20) {
            for (let  i = 0; i < this.props.flowerNum; i++){
                flower.push(<img src={this.props.flowerImg} alt={this.props.flowerName} key={i} />)
            }
        } else {
            for (let  i = 0; i < 20; i++){
                flower.push(<img src={this.props.flowerImg} alt={this.props.flowerName} key={i} />)
            }
        }
        
        return(
            <div id="flowers">
                {flower}
            </div>
        )
    }
}
export default class ForestDisplay extends Component {
    render() {  
        return(
            <div>
                <section className="forest-page">
                    <div className="forest-image">
                        {/* Display Trees and Flowers Cards */}
                        <Trees treeNum={this.props.treeNum} treeImg={this.props.treeImg} />
                        <Flowers flowerNum={this.props.flowerNum} flowerImg={this.props.flowerImg} />

                        <div id="flowers">

                        </div>
                    </div>

                </section>
                {/* Display planned work time */}
                <section>
                    <h1 className="centered">Planned Work Time: <span className="streaks">{this.props.time} Minutes <span role="img" aria-label="fire emoji">🔥</span></span></h1>
                </section>
            </div>
        )
    }
}