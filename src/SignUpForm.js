import React, { Component } from 'react'; 
import firebase from 'firebase/app';
import 'firebase/analytics';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


export default class SignUpForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: null
        };
    }

     // Configure Firebase UI (inside the component, public class field)
    uiConfig = {
        //which sign in values should we support?
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        // for external sign-in methods, use popup instead of redirect
        signInFlow: "popup"
    };

    componentDidMount() {

        this.authUnSubFunction = firebase.auth().onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) {         // If exists, then we logged in
                this.setState({ user: firebaseUser });
                this.props.userCallback(this.state.user.email);
            } else {
                this.setState({ user: null })
            }
        })
    }

    componentWillUnmount() {
        this.authUnSubFunction(); // stop listening for auth changes
    }
    
    handleSignOut = () => {
        this.setState({ errorMessage:null }); //clear old error
    
        firebase.auth().signOut()
        .catch((err) => {
            this.setState({errorMessage: err.message})
        })
        this.props.userCallback("");
    }
    
    handleChange = (event) => {
        let field = event.target.name;  //which input
        let value = event.target.value; //what value
    
        let changes = {}; //object to hold changes
        changes[field] = value;
        this.setState(changes);
    }
    
    
   
    
    
    
    render() {
        let content = null;
        if(!this.state.user) { //signed out
            content = (
                <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
            )
        } else {
            content = (
                <div>
                    <section>
                        <div className="alert alert-success">
                            <h3 className="ml-3">Logged in as {this.state.user.displayName} </h3>
                        </div>

                        <button className="btn btn-warning float-right" onClick={this.handleSignOut}>
                            Sign Out
                        </button>

                    </section>

                    
                    
                </div>
            )
        }
    
        return (
            <div className="col-sm-12 col-md-3 col-lg-3">
                <h2 className="scheduleTitleTop">Log In</h2>
                <section className="ml-3">
                    {/* only included if first clause is true */}
                    {this.state.errorMessage &&
                        <p className="alert alert-danger">{this.state.errorMessage}</p>
                    }
            
                    {/* show content based on user login state */}
                    {content}
                </section>
    
            </div>
        )
    }


}