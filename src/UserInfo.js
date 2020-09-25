import React, { Component } from 'react'; 
import firebase from 'firebase/app';


export default class UserInfo extends Component {

    constructor(props){
        super(props);

        // This will save the firebase user data
        this.state = {
            user: []
        }
    }

    // This will update the firebase user data
    handleClick = () => {
            let userRef = firebase.database().ref(this.props.userInfo.user);
            userRef.set({
              goal: this.props.userInfo.goal,
              tree: this.props.userInfo.tree,
              flower: this.props.userInfo.flower,
              time: this.props.userInfo.time,
              animal: this.props.userInfo.animal
            })
            .catch(err => console.log(err)); // log any erros
    }

    // this will pull the firebase user data
    componentDidMount() {
        if(this.props.userInfo.user === undefined || this.props.userInfo.user === "") {
            return;
        } else {
            let prevGoalRef = firebase.database().ref(this.props.userInfo.user);
            prevGoalRef.on('value', (snapshot) => {
                let value = snapshot.val();
                this.setState({ user: value });
            });
        }
    }

    // this will replace empty data with "Nothing saved"
    displayContent = (content) => {
        if (content === undefined || (content === "")) {
            return "Nothing saved";
        } else {
            return content;
        }
    }


    render() {
        let content;
        
        // Display different content based on the log in status
        if(this.props.userInfo.user === undefined || this.props.userInfo.user === "") {
            // Display the warning box
            content = <div className="alert alert-danger mt-3" role="alert">
                Please Log in first
            </div>
        } else {
            // Display the data
            content = 
            <div>
                <h2 className="ml-3 mt-2 mb-2">WELCOME!</h2>

                <h3 className="ml-3 mt-2 mb-2">Here is your previous saved goal: </h3>
                <p className="ml-3 mt-2 mb-2"><strong className="streaks centered">{this.displayContent(this.state.user.goal)}</strong></p>

                <h3 className="ml-3 mt-2 mb-2">Here is your previous saved work time: </h3>
                <p className="ml-3 mt-2 mb-2"><strong className="streaks centered">{this.displayContent(this.state.user.time)}</strong></p>

                <h3 className="ml-3 mt-2 mb-2">Here is your previous saved tree preference: </h3>
                <p className="ml-3 mt-2 mb-2"><strong className="streaks centered">{this.displayContent(this.state.user.tree)}</strong></p>

                <h3 className="ml-3 mt-2 mb-2">Here is your previous saved flower preference: </h3>
                <p className="ml-3 mt-2 mb-2"><strong className="streaks centered">{this.displayContent(this.state.user.flower)}</strong></p>

                <h3 className="ml-3 mt-2 mb-2">Here is your previous accomplishment: </h3>
                <p className="ml-3 mt-2 mb-2"><strong className="streaks centered">{this.displayContent(this.state.user.animal)}</strong></p>

                <div className="text-center">
                    <button type="button" className="mx-2 mt-1 mb-4 text-center" id="main-btn" aria-label="Submit Personal Preference" role="button" onClick={this.handleClick}>Save your current preference</button>
                </div>

                <p className="text-center">Please re-enter and save your goal after you log in!</p>
            </div>
        }

        return(
            <div className="col-sm-12 col-md-7 col-lg-7">
                <h2 className="scheduleTitleTop">User Profile</h2>
                <section className="ml-3">
                    {content}
                </section>
            </div>
        )
    }
}