import React, { Component } from 'react'; 
import PersonalPreference from './PersonalPreference';

import { Redirect } from 'react-router-dom'


export default class DailyGoal extends Component {

    constructor() {
        super();
        this.state = {
            inputGoal: "", 
            inputTime: "",
            typeWarning: false,
            numWarning: false,
            passedCheck: false
        };
    }

    handleClick = () => {

        let checkOne = false;
        let checkTwo = false;
        
        // Check if user has selected all the required fields 
        if(this.props.userInfo.didSelectTree === true & this.props.userInfo.didSelectFlower === true) {
            this.setState({
                typeWarning: false
            });
            checkTwo = true;
        } else {
            this.setState({
                typeWarning: true
            });
        }

        // Check the number is larger than 1
        if(this.state.inputTime === undefined | this.state.inputTime === "" | this.state.inputTime < 10) {
            this.setState({
                numWarning: true
            });
        } else {
            this.setState({
                numWarning: false
            });
            checkOne = true;
            
        }

        // Update the tree and flower selection into main.js
        if (checkOne === true & checkTwo === true) {
            this.props.goalCallback(this.state.inputGoal, this.state.inputTime);
            this.setState({passedCheck: true}); 
        }
    }

    handleChange = (event) => {
        // track what user has typed
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        });
    } 


    render() {

        let typeWarningMsg;
        let numWarningMsg;
        
        // Check whether or not to display the type warning message
        if (this.state.typeWarning === false) {
            typeWarningMsg = undefined;
        } else {
            // Prompt an error
            typeWarningMsg = 
            <div className="alert alert-danger" role="alert">
                Please select the required fields in the Personal Preference
            </div>
        }

        // Check whether or not to display the number warning message
        if (this.state.numWarning === false) {
            numWarningMsg = undefined;
        } else {
            // Prompt an error
            numWarningMsg = 
            <div className="alert alert-danger mt-3" role="alert">
                Please enter a correct time
            </div>
        }

        // If it passes both checks
        if (this.state.passedCheck) {
            return <Redirect to="/content" />
        }

        // The content of the daily goal page
        return(
            <div>
                <h2 className="scheduleTitleTop">Daily Goals</h2>
                <section className="col-sm-12 col-md-7 col-lg-8 scheduleForm">
                    <div>
                        <p><strong>Welcome!</strong> What is your goal for today? (Optional)</p>
                        <textarea type="text" name="inputGoal" className="form-control" placeholder="My goal for today is..." aria-label="Enter your goal for today" value={this.state.inputGoal} onChange={this.handleChange}></textarea>

                        <p>Please enter the amount of minutes you want to work:</p>
                        <input type="number" name="inputTime" placeholder="Minimum 10 minutes" aria-label="Enter the amount of time you want to work" value={this.state.inputTime} onChange={this.handleChange}/> 
                        {numWarningMsg}
                    </div>
                </section>

                <PersonalPreference treeCallback={this.props.treeCallback} flowerCallback={this.props.flowerCallback}/>

                {typeWarningMsg}

                <div className="text-center">
                    <button type="button" className="mx-2 mt-1 mb-4" id="main-btn" aria-label="Submit Daily Goals" role="button" onClick={this.handleClick}>Submit</button>
                </div>
            </div>
        )
    }

}