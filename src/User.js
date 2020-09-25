import React, { Component } from 'react'; 
import SignUpForm from './SignUpForm';
import UserInfo from './UserInfo'

export default class Main extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <SignUpForm userCallback={this.props.userCallback} userInfo={this.props.userInfo}/> 
                    <UserInfo userInfo={this.props.userInfo}/>               
                </div>
            </div>
        )
    }
}
