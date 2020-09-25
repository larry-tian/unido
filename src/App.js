import React, { Component } from 'react'; 
import Navbar from './Nav';
import Main from './Main';
import DailyGoal from './DailyGoal';
import Footer from './Footer';
import User from './User';



import { BrowserRouter, Route, Switch } from 'react-router-dom'



class App extends Component {

  constructor(props) {
    super(props);

    // User information 
    this.state = {
      user: "",
      goal: "",
      time: 0,
      flower: "",
      flowerImg: "",
      tree: "",
      treeImg: "",
      treeNum: 0,
      flowerNum: 0,
      animal: "",
      didSelectTree: false,
      didSelectFlower: false
    }
  }

  // Replace email to user account
  enterUser = (user) => {
    this.setState((currentState) => {
      currentState.user = user.replace(/[^a-zA-Z0-9]/g, "");
      return currentState;
    })
  }

  // update the daily goal 
  enterGoal = (goal, goalTime) => {
    this.setState((currentState) => {
        currentState.goal = goal;
        currentState.time = goalTime;
        currentState.treeNum = 0;
        currentState.flowerNum = 0;
        return currentState;
    })
}


  // update the tree preference
  enterTree = (tree, treePath) => {
    this.setState((currentState) => {
        currentState.tree = tree;
        currentState.treeImg = treePath;
        currentState.didSelectTree = true;
        return currentState;
    })
  }

  // update the flower preference
  enterFlower = (flower, flowerPath) => {
    this.setState((currentState) => {
        currentState.flower = flower;
        currentState.flowerImg = flowerPath;
        currentState.didSelectFlower = true;
        return currentState;
    })
  }

  // increment the tree
  addTreeNum = () => {
    this.setState({
      treeNum: this.state.treeNum + 1
    });
  }

  // increment the flower
  addFlowerNum = () => {
    this.setState({
      flowerNum: this.state.flowerNum + 1
    });
  }

  render() {

    return (
      <div>
          
        <BrowserRouter>
          {/* Header */}
          <Navbar/>

            {/* Main Content*/}
            <Switch>

            {/* Display Daily Goal page */}
            <Route path='/' exact render={(routerProps) => (
              <DailyGoal {...routerProps} goalCallback={this.enterGoal} pageCallback={this.updatePage} treeCallback={this.enterTree} flowerCallback={this.enterFlower} userInfo={this.state}/>
            )} />

            {/* Display Main Interaction page */}
            <Route path='/content' render={(routerProps) => (
              <Main {...routerProps} userInfo={this.state} pageCallback={this.updatePage} goalCallback={this.enterGoal} treeCallback={this.enterTree} flowerCallback={this.enterFlower} addTreeNum={this.addTreeNum} addFlowerNum={this.addFlowerNum}/>
            )} />

            {/* Display User Profile page */}
            <Route path='/user' render={(routerProps) => (
              <User {...routerProps} userCallback={this.enterUser} userInfo={this.state}/>
            )}/>

            </Switch>

          {/* Footer */}
          <Footer/>
        </BrowserRouter>

      </div>
    );
  }

}

export default App;
