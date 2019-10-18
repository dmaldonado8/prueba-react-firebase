import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {withFirebase} from '../helpers/Firebase';

class Protected extends Component {
    componentDidMount() {
        console.log(this.props);
        
        this.listener = this.props.firebase.auth.onAuthStateChanged(user => {
            if(user == null) {
                this.props.history.push('/')
            } 
        });
    }

    componentWillUnmout() {
        this.listener();
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default withRouter(withFirebase(Protected))