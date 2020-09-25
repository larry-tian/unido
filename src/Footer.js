import React, { Component } from 'react'; 

export default class Footer extends Component {

    render() {
        return(
            <div>
                <footer className="centered">
                    <p>This is a project for our Info 340 class</p>
                    <p>Contact us: <a href="mailto:ganlin@uw.edu" aria-label="Email Larry Tian">ganlin@uw.edu</a> &amp; <a href="mailto:rcm23@uw.edu" aria-label="Email Raphael Manansala">rcm23@uw.edu</a></p>
                    <p>&copy; Larry Tian &amp; Raphael Manansala</p>
                </footer>
            </div>
        )
    }
}